import { useEffect, useRef } from "react";
import * as THREE from "three";

const FIRE_SETTINGS = {
  // Core
  coreRadius: 220,
  coreDistortion: 0,

  // Tail
  flameLength: 400,
  flameWidth: 220,
  flameTaper: 0.5,

  // Flame detail
  turbulence: 0,
  turbulenceScale: 0,
  flickerSpeed: 0,
  sharpness: 0.9,

  // Movement
  followSmoothness: 8,
  velocitySmoothness: 5,
  maxVelocity: 2000,
  speedInfluence: 0.3,

  // Performance
  pixelRatio: 1.5,
  desktopOnly: true,
  differenceBlend: true,

  // Scroll behavior
  heroSelector: "#hero",
  heroStartScale: 1,
  heroEndScale: 0,
  scrollScaleSmoothness: 8,
  scrollShrinkPower: 4,
};

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix
      * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec2 uVelocity;
  uniform float uTime;

  uniform float uCoreRadius;
  uniform float uCoreDistortion;
  uniform float uFlameLength;
  uniform float uFlameWidth;
  uniform float uFlameTaper;
  uniform float uTurbulence;
  uniform float uTurbulenceScale;
  uniform float uFlickerSpeed;
  uniform float uSharpness;
  uniform float uSpeedInfluence;
  uniform float uBallScale;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(
      sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123
    );
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(
        hash(i + vec2(0.0, 1.0)),
        hash(i + vec2(1.0, 1.0)),
        f.x
      ),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 4; i++) {
      value += noise(p) * amplitude;
      p *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    // Direction of travel.
    float speed = length(uVelocity);
    vec2 direction = speed > 0.5
      ? normalize(uVelocity)
      : vec2(1.0, 0.0);

    vec2 perpendicular = vec2(-direction.y, direction.x);

    // Coordinates relative to the cursor.
    vec2 p = (gl_FragCoord.xy - uMouse) / max(uBallScale, 0.001);

    float along = dot(p, direction);
    float across = dot(p, perpendicular);

    // The shape itself responds to movement.
    // No tail opacity toggle or separate fade animation.
    float movement = clamp(
      speed * uSpeedInfluence / uFlameLength,
      0.0,
      1.0
    );

    float tailLength = uFlameLength * movement;

    // Distort the flame with animated turbulence.
    vec2 noisePos = p * uTurbulenceScale;

    noisePos += direction * uTime * uFlickerSpeed * 0.12;

    float turbulence = fbm(
      noisePos + vec2(uTime * 0.3, -uTime * 0.2)
    );

    float edgeNoise = (turbulence - 0.5) * uTurbulence;

    // Irregular central fireball.
    float angle = atan(p.y, p.x);

    float coreNoise = fbm(
      vec2(cos(angle), sin(angle)) * 3.0
      + uTime * 0.35
    );

    float coreRadius = uCoreRadius
      + (coreNoise - 0.5) * uCoreDistortion
      + edgeNoise * 4.0;

    float coreDistance = length(p) - coreRadius;

    // A tapered tail attached directly to the core.
    float tailProgress = clamp(
      -along / max(tailLength, 0.001),
      0.0,
      1.0
    );

    float tailRadius = uFlameWidth * pow(
      max(1.0 - tailProgress, 0.0),
      uFlameTaper
    );

    // The tail is narrow at its tip and wider at its base.
    tailRadius += edgeNoise * (1.0 - tailProgress) * 10.0;

    float tailDistance = max(
      abs(across) - tailRadius,
      max(along, -along - tailLength)
    );

    // Keep the tail connected to the core.
    float distanceField = min(coreDistance, tailDistance);

    // Sharp, irregular silhouette without blur.
    float edge = max(1.4, 3.0 - uSharpness * 1.8);

    float alpha = 1.0 - smoothstep(
      -edge,
      edge,
      distanceField
    );

    // Fine flame variation.
    float detail = fbm(
      p * 0.035 + uTime * uFlickerSpeed * 0.15
    );

    float brightness = mix(0.72, 1.0, detail);

    // White in difference mode creates a dark inversion effect.
    vec3 color = vec3(brightness);

    gl_FragColor = vec4(color, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export default function BlackFireball() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (FIRE_SETTINGS.desktopOnly && window.innerWidth < 768) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const settings = FIRE_SETTINGS;

    const heroElement = document.querySelector(
      settings.heroSelector
    );

    let targetBallScale = settings.heroStartScale;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, settings.pixelRatio)
    );

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      0.1,
      10
    );

    camera.position.z = 1;

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uResolution: {
          value: new THREE.Vector2(
            window.innerWidth,
            window.innerHeight
          ),
        },
        uMouse: {
          value: new THREE.Vector2(
            window.innerWidth / 2,
            window.innerHeight / 2
          ),
        },
        uVelocity: {
          value: new THREE.Vector2(0, 0),
        },
        uTime: { value: 0 },

        uCoreRadius: { value: settings.coreRadius },
        uCoreDistortion: { value: settings.coreDistortion },
        uFlameLength: { value: settings.flameLength },
        uFlameWidth: { value: settings.flameWidth },
        uFlameTaper: { value: settings.flameTaper },
        uTurbulence: { value: settings.turbulence },
        uTurbulenceScale: { value: settings.turbulenceScale },
        uFlickerSpeed: { value: settings.flickerSpeed },
        uSharpness: { value: settings.sharpness },
        uSpeedInfluence: { value: settings.speedInfluence },
        uBallScale: { value: settings.heroStartScale },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(
      window.innerWidth,
      window.innerHeight
    );

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const targetMouse = new THREE.Vector2(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    const smoothMouse = targetMouse.clone();
    const previousMouse = targetMouse.clone();
    const smoothVelocity = new THREE.Vector2(0, 0);

    const clock = new THREE.Clock();
    let animationFrame;
    let disposed = false;

    function handlePointerMove(event) {
      targetMouse.set(
        event.clientX,
        window.innerHeight - event.clientY
      );
    }

    function handleResize() {
      if (
        settings.desktopOnly &&
        window.innerWidth < 768
      ) {
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);

      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();

      geometry.dispose();
      plane.geometry = new THREE.PlaneGeometry(width, height);

      material.uniforms.uResolution.value.set(width, height);
    }

    function animate() {
      if (disposed) return;

      animationFrame = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.033);

      // Shrink the fireball as the hero scrolls out of view.
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();

        const heroHeight = Math.max(heroRect.height, 1);

        const rawProgress = THREE.MathUtils.clamp(
          1 - heroRect.bottom / heroHeight,
          0,
          1
        );

        const progress = Math.pow(
          rawProgress,
          1 / settings.scrollShrinkPower
        );

        targetBallScale = THREE.MathUtils.lerp(
          settings.heroStartScale,
          settings.heroEndScale,
          progress
        );
      }

      // Smooth the size change.
      const scaleFollow =
        1 - Math.exp(-settings.scrollScaleSmoothness * delta);

      material.uniforms.uBallScale.value = THREE.MathUtils.lerp(
        material.uniforms.uBallScale.value,
        targetBallScale,
        scaleFollow
      );

      material.uniforms.uTime.value = clock.elapsedTime;

      // Smoothly follow the pointer.
      const follow = 1 - Math.exp(
        -settings.followSmoothness * delta
      );

      smoothMouse.lerp(targetMouse, follow);

      // Calculate velocity from actual smoothed movement.
      const targetVelocity = smoothMouse
        .clone()
        .sub(previousMouse)
        .divideScalar(Math.max(delta, 0.001));

      previousMouse.copy(smoothMouse);

      const velocityLength = targetVelocity.length();

      if (velocityLength > settings.maxVelocity) {
        targetVelocity.setLength(settings.maxVelocity);
      }

      const velocityFollow = 1 - Math.exp(
        -settings.velocitySmoothness * delta
      );

      smoothVelocity.lerp(targetVelocity, velocityFollow);

      // Both position and velocity drive one continuous flame shape.
      material.uniforms.uMouse.value.copy(smoothMouse);
      material.uniforms.uVelocity.value.copy(smoothVelocity);

      renderer.render(scene, camera);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      disposed = true;

      cancelAnimationFrame(animationFrame);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
      style={{
        mixBlendMode: FIRE_SETTINGS.differenceBlend
          ? "difference"
          : "normal",
      }}
    />
  );
}
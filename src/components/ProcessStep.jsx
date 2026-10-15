
const ProcessStep = ({
  number,
  title,
  description,
  image,
  isActive,
  onActivate,
}) => {
  return (
    <div
      className="group relative py-1"
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div className="flex gap-5 text-left md:gap-8">
        <span
          className={`font-archivo text-3xl transition-colors duration-300 ${
            isActive ? "text-black" : "text-black/60"
          }`}
        >
          {number}
        </span>

        <div className="flex flex-1 flex-col gap-3">
          <h3
            className={`font-archivo text-2xl font-medium transition-colors duration-300 md:text-3xl ${
              isActive ? "text-black" : "text-black/60"
            }`}
          >
            {title}
          </h3>

          <p className="max-w-[52rem] text-sm leading-relaxed text-black/90 md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Floating GIF detail */}
      <div
        className={`pointer-events-none absolute left-[calc(100%+1rem)] top-1/2 z-20 hidden w-28 -translate-y-1/2 overflow-hidden rounded-lg shadow-xl transition-all duration-300 ease-out lg:block ${
          isActive
            ? "translate-x-0 rotate-3 scale-100 opacity-100"
            : "translate-x-3 rotate-6 scale-90 opacity-0"
        }`}
      >
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="aspect-square w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProcessStep;

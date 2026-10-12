
const ProcessStep = ({
  number,
  title,
  description,
  isActive,
  onActivate,
}) => {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className="group flex w-full cursor-pointer gap-5 py-4 text-left transition-colors duration-200 md:gap-8 md:py-4"
    >
      <span
        className={`font-archivo text-4xl transition-colors duration-300 ${
          isActive ? "text-black" : "text-black/60"
        }`}
      >
        {number}
      </span>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`font-archivo text-2xl font-medium transition-colors duration-200 md:text-3xl lg:text-4xl ${
              isActive ? "text-black" : "text-black/60"
            }`}
          >
            {title}
          </h3>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
          {description}
        </p>
      </div>
    </button>
  );
};

export default ProcessStep;
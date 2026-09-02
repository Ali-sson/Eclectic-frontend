const CustomCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#17130F] px-6 py-24 md:py-28">
      
      {/* Large Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap font-display text-[180px] font-light leading-none text-white/[0.035] md:text-[260px] lg:text-[320px]">
          ECLECTIC
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Small Label */}
        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.4em] text-[#B7AFA4]">
          Custom Commissions
        </p>

        {/* Heading */}
        <h2 className="font-display text-4xl font-light leading-tight text-[#F8F5EE] md:text-5xl lg:text-6xl">
          Have Something{" "}
          <span className="font-display italic text-[#D4AF37]">
            Special
          </span>
          <br />
          In Mind?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-xs leading-6 text-[#B7AFA4] md:text-sm">
         Tell us what you have in mind, and we'll help bring your design to life.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Primary Button */}
          <button
            className="
              min-w-[185px]
              bg-[#D4AF37]
              px-6
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#17130F]
              transition
              duration-300
              hover:bg-[#E8C766]
            "
          >
            Request a Custom Design
          </button>

          {/* Secondary Button */}
          <button
            className="
              min-w-[165px]
              border
              border-white/40
              px-6
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#F8F5EE]
              transition
              duration-300
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
            "
          >
            View Designs
          </button>

        </div>
      </div>
    </section>
  );
};

export default CustomCTA;
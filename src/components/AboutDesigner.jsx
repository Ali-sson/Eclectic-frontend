import DesignerImage from "../assets/CEO.jpeg";

const AboutDesigner = () => {
  return (
    <section id="about" className="bg-[#F8F5EE] px-6 py-20 md:px-12 lg:px-20 scroll-mt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-20">


        
        {/* Content */}

        <div className="max-w-xl">

          {/* Small Heading */}
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#8A6F20]">
            The Designer
          </p>

          {/* Main Heading */}
          <h2 className="font-display text-4xl leading-tight text-[#0B0B0B] md:text-4xl italic">
            The Vision Behind ECLECTIC
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-[#526070] md:text-base">
            ECLECTIC was born from a passion for fashion, creativity, and the art of making every piece feel uniquely personal. We believe great fashion is more than what you wear—it is an expression of who you are.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#526070] md:text-base">
           From the first concept to the final stitch, every detail is thoughtfully considered. With a focus on quality craftsmanship, 
           refined design, and a precise fit, we create pieces that are made to be seen, remembered, and truly yours.</p>

          {/* Button */}
          <a
            href="https://www.instagram.com/ellis55j?igsi=MWl6NjFtMG91cjBxaw=="
            className="mt-8 inline-block bg-gold px-7 py-4 text-[12px]
            font-semibold uppercase tracking-[0.2em] text-black
            transition duration-300 hover:bg-[#D4AF37] text-center"
          >
            Contact Me
          </a>

        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md">
          <img
            src={DesignerImage}
            alt="ECLECTIC fashion designer"
            className="h-[500px] w-full object-cover md:h-[580px]"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-4 right-0 bg-white px-7 py-6 shadow-sm md:-right-5">
            <p className="font-display text-2xl text-[#1A1A1A]">
              10+
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#6B7280]">
              Years of Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutDesigner;
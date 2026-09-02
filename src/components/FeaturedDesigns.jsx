import men1 from "../assets/suit1.jpeg";
import female1 from "../assets/female1.jfif";
import female2 from "../assets/female2.jpeg";
import men2 from "../assets/men1.jpeg";

const designs = [
  {
    image: men1,
    title: "Men's Suit",
    year: "2026",
  },
  {
    image: female1,
    title: "Female Dress",
    year: "2026",
  },
  {
    image: female2,
    title: "Female Dress",
    year: "2026",
  },
  {
    image: men2,
    title: "Men's Native",
    year: "2026",
  },
];

const FeaturedDesigns = () => {
  return (
    <section className="bg-ivory px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Top border */}
        <div className="">

          {/* Section Label */}
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#8A6F20]">
            Featured Designs
          </p>

          {/* Heading */}
          <h2 className="italic text-4xl tracking-tight text-black md:text-5xl">
            Recent work from the{" "}
            <span className="font-light italic">Elcetic</span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm text-[#526070] md:text-base">
         Discover our latest designs, carefully made with great attention to detail.
          </p>

          {/* Designs */}
          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {designs.map((design, index) => (
              <div key={index} className="group cursor-pointer">

                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden bg-[#EAE4D8]">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Caption */}
                <div className="mt-5 flex items-center justify-between px-1">
                  <h3 className="font-display text-[15px] text-[#1A1A1A]">
                    {design.title}
                  </h3>

                  <span className="text-[10px] tracking-[0.35em] text-[#526070]">
                    {design.year}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
                  <div className="text-left md:text-center">
                  <a
                     href="/work"
                     className="mt-8 inline-block bg-gold px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#D4AF37] text-center"
                     >
                     View More Designs
                  </a>
                  </div>
    </section>
  );
};

export default FeaturedDesigns;
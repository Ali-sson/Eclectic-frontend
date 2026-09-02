import {
  Shirt,
  Crown,
  Scissors,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Men's Fashion",
    description:
      "Suits, agbada, senator wear & contemporary styles.",
  },
  {
    icon: Crown,
    title: "Women's Fashion",
    description:
      "Gowns, aso-ebi, cocktail dresses & traditional outfits.",
  },
  {
    icon: Scissors,
    title: "Bespoke Tailoring",
    description:
      "Custom measurements & personalized designs.",
  },
  {
    icon: Sparkles,
    title: "Event Styling",
    description:
      "Wedding, owambe & corporate event outfits.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#8A6F20]">
            What We Offer
          </p>

          <h2 className="italic text-4xl tracking-tight text-black md:text-5xl">
            Our Services
          </h2>

          
          {/* Description */}
          <p className="mt-5 text-sm text-[#526070] md:text-base">
         From custom designs to expert tailoring, we create stylish pieces made to fit you and your occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group border border-white/10 bg-black p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#1b1b1b]"
              >
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                  <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-text text-sm leading-7 text-white/50">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
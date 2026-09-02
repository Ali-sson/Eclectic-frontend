import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black px-6 pt-16 text-[#F8F5EE] md:px-12 lg:px-20 border-t border-gold">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 pb-16 md:grid-cols-3 lg:grid-cols-[1.5fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl tracking-[0.3em]">
              ECLECTIC
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#B7AFA4]">
              Crafted with vision. Designed for you. Creating distinctive
              pieces through thoughtful design and expert tailoring.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-gold">
              Navigate
            </p>

            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href="/Work"
                  className="transition hover:text-[#D4AF37]"
                >
                  Our Work
                </a>
              </li>


              <li>
                <a
                  href="/custom"
                  className="transition hover:text-[#D4AF37]"
                >
                  Custom
                </a>
              </li>

             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-gold">
              Contact
            </p>

            <div className="space-y-5 text-sm text-[#B7AFA4]">

              {/* WhatsApp */}
              <a
                href="https://wa.me/2347081646847"
                className="flex items-center gap-4 transition hover:text-[#D4AF37]"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+2348143618356"
                className="flex items-center gap-4 transition hover:text-[#D4AF37]"
              >
                <Phone size={18} strokeWidth={1.5} />
                <span>+234 814 361 8356</span>
              </a>

              {/* Email */}
              <a
                href="mailto:iliyaelisha7333@gmail.com"
                className="flex items-center gap-4 transition hover:text-[#D4AF37]"
              >
                <Mail size={18} strokeWidth={1.5} />
                <span>iliyaelisha7333@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0"
                />

                <span>
                  Lagos, Nigeria
                </span>
              </div>

            </div>

            {/* Socials */}
            <div className="mt-10">
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-gold">
                Follow
              </p>

              <div className="flex gap-6 text-sm">
                <a
                  href="https://www.instagram.com/ellis55j?igsi=MWl6NjFtMG91cjBxaw=="
                  className="transition hover:text-[#D4AF37]"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/share/1DRBacXZaV/"
                  className="transition hover:text-[#D4AF37]"
                >
                  Facebook
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-4 text-xs text-[#8F877D] md:flex-row">

            <p>
              © {new Date().getFullYear()} ECLECTIC. All rights reserved.
            </p>

            <p>
              Designed and made in Lagos, Nigeria.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
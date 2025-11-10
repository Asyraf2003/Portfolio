import { mySocials } from "../constants";
import { asset } from "../lib/asset"; 

const Footer = () => {
  return (
    <footer className="relative w-full mt-6 md:mt-10">
      <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space border-t border-neutral-700 pt-3 bg-transparent">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img src={asset(social.icon)} className="w-5 h-5" alt={social.name} />
            </a>
          ))}
        </div>
        <p>© 2025 Asyraf. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;

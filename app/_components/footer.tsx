import { Instagram } from "lucide-react";
import { WA_URL } from "../_lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020c18] py-8">
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(254,102,1,0.4), transparent)" }}
      />
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sans text-white/26 text-[0.74rem]">© 2026 Renata Folloni. Todos os direitos reservados.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="font-sans text-white/26 text-[0.74rem] hover:text-white/55 transition-colors duration-200">
            Privacidade
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-white/26 text-[0.74rem] hover:text-[#fe6601] transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/renatafolloni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-white/26 text-[0.74rem] hover:text-[#fe6601] transition-colors duration-200"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

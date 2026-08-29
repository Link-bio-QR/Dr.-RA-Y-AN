import type { CSSProperties } from "react";
import { Phone, MapPin } from "lucide-react";
import LinkButton from "@/components/LinkButton";
import {
  TikTokIcon,
  WhatsAppIcon,
  ViberIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

const LINKS = [
  {
    href: "https://www.tiktok.com/@dr_rayanali",
    title: "TikTok",
    icon: <TikTokIcon size={15} />,
    external: true,
  },
  {
    href: "https://www.instagram.com/dr_rayanvetclinic",
    title: "Instagram",
    icon: <InstagramIcon size={16} strokeWidth={2.4} />,
    external: true,
  },
  {
    href: "https://www.facebook.com/share/18JutYZNhq/",
    title: "Facebook",
    icon: <FacebookIcon size={16} strokeWidth={2.4} />,
    external: true,
  },
  {
    href: "tel:07761233000",
    title: "Phone Number",
    icon: <Phone size={15} strokeWidth={2.4} />,
    external: false,
  },
  {
    href: "https://wa.me/9647761233000",
    title: "WhatsApp",
    icon: <WhatsAppIcon size={16} />,
    external: true,
  },
  {
    href: "viber://chat?number=%2B9647761233000",
    title: "Viber",
    icon: <ViberIcon size={16} />,
    external: false,
  },
  {
    href: "https://maps.app.goo.gl/tpPzaLGFu7pY5Wwt8",
    title: "Map",
    icon: <MapPin size={16} strokeWidth={2.4} />,
    external: true,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-start justify-center overflow-x-hidden bg-teal-base">
      {/* --- Ambient depth around the card (same teal, never gray) --- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal-main/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] left-[-120px] h-[380px] w-[380px] rounded-full bg-teal-main/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] top-[38%] h-[340px] w-[340px] rounded-full bg-teal-main/15 blur-[100px]"
      />

      {/* --- Card: poster image + footer, one seamless teal --- */}
      <div className="relative w-full max-w-[480px] overflow-hidden bg-teal-base shadow-[0_10px_30px_rgba(0,0,0,0.35)] [container-type:inline-size] sm:my-[15px] sm:rounded-[24px] sm:ring-1 sm:ring-white/10">
        {/* ================= POSTER (your Background.jpeg) ================= */}
        <section
          className="relative w-full bg-teal-base bg-[url('/Background.jpeg')] bg-cover bg-center"
          style={{ aspectRatio: "1 / 1.52", backgroundSize: "100% 100%" }}
        >
          {/* Social / contact buttons overlaid on the poster */}
          <nav className="absolute left-1/2 top-[40.5%] flex w-[82%] -translate-x-1/2 flex-col gap-[1.5cqw]">
            {LINKS.map((link, i) => (
              <LinkButton
                key={link.title}
                href={link.href}
                title={link.title}
                icon={link.icon}
                index={i}
                external={link.external}
              />
            ))}
          </nav>

          {/* Bottom slogan over the poster */}
          <p
            dir="rtl"
            className="rise absolute bottom-[2%] left-1/2 w-[92%] -translate-x-1/2 whitespace-nowrap text-center font-naskh text-[2.7cqw] font-bold text-white"
            style={
              {
                "--d": "750ms",
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
              } as CSSProperties
            }
          >
            پسپۆڕی لە خزمەتکردن ، دڵسۆزی لە چارەسەر کردن
          </p>
        </section>

        {/* ================= FOOTER (merged, same teal) ================= */}
        <footer className="relative -mt-px flex flex-col items-center gap-[6px] bg-teal-base px-4 pb-4 pt-[14px] text-center">
          <p dir="rtl" className="font-naskh text-[13.5px] font-semibold text-[#e2f1f1]">
            « میهرەبانی لەگەڵ ئاژەڵان ، دڵسۆزی لە چارەسەر »
          </p>
          <p className="font-sans text-[11px] font-semibold tracking-[0.5px] text-white">
            Dr.Rayan .All Rights Reserved 2026
          </p>
        </footer>
      </div>
    </main>
  );
}

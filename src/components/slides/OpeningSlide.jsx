import { motion as Motion } from "framer-motion";
import {
  Building2,
  CheckCheck,
  Handshake,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import SlideBackdrop from "./shared/SlideBackdrop";

const orbitItems = [
  {
    className: "left-[6%] top-[18%] sm:left-[14%] sm:top-[14%]",
    icon: Users,
    size: "h-16 w-16 sm:h-24 sm:w-24",
    delay: 0.1,
  },
  {
    className: "right-[1%] top-[40%] sm:right-[0%] sm:top-[36%]",
    icon: Scale,
    size: "h-16 w-16 sm:h-24 sm:w-24",
    delay: 0.45,
  },
  {
    className: "left-[10%] bottom-[12%] sm:left-[18%] sm:bottom-[10%]",
    icon: CheckCheck,
    size: "h-16 w-16 sm:h-24 sm:w-24",
    delay: 0.28,
  },
];

function OrbitalIcon({ className, icon: Icon, size, delay }) {
  return (
    <div className={`absolute ${className}`}>
      <Motion.div
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 0 0 rgba(255,191,101,0.08)",
            "0 0 28px rgba(255,191,101,0.22)",
            "0 0 0 rgba(255,191,101,0.08)",
          ],
        }}
        transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`flex ${size} items-center justify-center rounded-full border border-[#d89f58]/75 bg-[#5f111d]/24 backdrop-blur-sm`}
      >
        <Icon className="h-7 w-7 text-[#eeaf61] sm:h-10 sm:w-10" strokeWidth={1.45} />
      </Motion.div>
    </div>
  );
}

function Spark({ className, delay }) {
  return (
    <Motion.span
      animate={{
        opacity: [0.28, 1, 0.28],
        scale: [0.92, 1.18, 0.92],
      }}
      transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className} h-2.5 w-2.5 rounded-full bg-[#ffc86b] shadow-[0_0_18px_rgba(255,200,110,0.85)]`}
    />
  );
}

export default function OpeningSlide() {
  return (
    <section className="relative min-h-full overflow-hidden text-[#f8e2af]">
      <SlideBackdrop variant="opening" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,115,37,0.12),transparent_28%),radial-gradient(circle_at_86%_22%,rgba(75,108,255,0.18),transparent_22%)]" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,rgba(48,6,7,0.28),rgba(48,6,7,0.12),transparent)]" />

      <div className="relative z-10 grid min-h-full gap-8 px-6 py-6 sm:px-10 sm:py-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-14 lg:py-8">
        <div className="flex min-h-0 flex-col justify-center pt-8 sm:pt-10 lg:pt-14">
          <div className="inline-flex w-fit items-center gap-4 rounded-full border border-[#d89d52] bg-[#67100f]/28 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1be6e] shadow-[0_0_0_1px_rgba(255,192,102,0.06)] backdrop-blur-sm sm:px-6 sm:text-base">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d89d52] bg-[#8e1d15]/54 text-[#f6c677]">
              <Sparkles className="h-5 w-5" strokeWidth={2} />
            </span>
            <span>Chủ đề học tập</span>
          </div>

          <div className="mt-8 max-w-4xl">
            <h1
              className="text-[clamp(4rem,8vw,7.6rem)] font-bold leading-[0.84] tracking-[-0.055em] text-[#fbe1ac] drop-shadow-[0_12px_24px_rgba(42,7,11,0.35)]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Dân chủ và
              <br />
              dân chủ xã hội
              <br />
              chủ nghĩa
            </h1>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-[#f1c06f] shadow-[0_0_15px_rgba(241,192,111,0.8)]" />
            <span className="h-px max-w-[640px] flex-1 bg-gradient-to-r from-[#d49749] via-[#f4c778] to-transparent" />
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#f5d7a1] sm:text-2xl">
            Khái niệm, bản chất và quá trình phát triển
          </p>
        </div>

        <div className="relative mx-auto hidden min-h-[360px] w-full max-w-[620px] lg:block xl:min-h-[420px] xl:max-w-[650px]">
          <Motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <div className="absolute inset-0 rounded-full border border-[#d7974f]/16" />
            <div className="absolute inset-[7%] rounded-full border border-[#de9e53]/38" />
            <div className="absolute inset-[15%] rounded-full border border-[#c58139]/16 border-dashed" />
            <div className="absolute inset-[24%] rounded-full border border-[#dca15b]/28" />
            <div className="absolute inset-x-[15%] bottom-[17%] h-[32%] rounded-[50%] border border-[#c6823e]/35 bg-[radial-gradient(circle_at_50%_14%,rgba(151,33,37,0.16),rgba(0,0,0,0)_70%)]" />

            <Spark className="left-[20%] top-[16%]" delay={0.12} />
            <Spark className="right-[17%] top-[9%]" delay={0.66} />
            <Spark className="right-[7%] top-[50%]" delay={1.08} />
            <Spark className="left-[25%] bottom-[7%]" delay={0.32} />
            <Spark className="left-[47%] top-[7%]" delay={0.92} />

            {orbitItems.map((item) => (
              <OrbitalIcon key={item.className} {...item} />
            ))}

            <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-[#e8a85b]">
              <Building2 className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44" strokeWidth={1.15} />
            </div>

            <div className="absolute left-1/2 top-[43%] flex w-[72%] -translate-x-1/2 items-end justify-between text-[#e8a85b]">
              <Users className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 xl:h-44 xl:w-44" strokeWidth={1.25} />
              <Users className="h-18 w-18 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-36 xl:w-36" strokeWidth={1.25} />
              <Users className="h-22 w-22 sm:h-28 sm:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40" strokeWidth={1.25} />
            </div>

            <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[#e8a85b]">
              <Handshake className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52" strokeWidth={1.15} />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgba(255,194,96,0.1),transparent_25%),radial-gradient(circle_at_58%_56%,rgba(255,103,38,0.12),transparent_40%)]" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion as Motion } from "framer-motion";
import {
  Building2,
  CheckCheck,
  Handshake,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import openingBase from "../../assets/slide-opening-base.svg";

const orbitItems = [
  {
    className: "left-[8%] top-[18%] sm:left-[16%] sm:top-[12%]",
    icon: Users,
    delay: 0.16,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
  {
    className: "right-[4%] top-[42%] sm:right-[2%] sm:top-[36%]",
    icon: Scale,
    delay: 0.28,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
  {
    className: "left-[10%] bottom-[12%] sm:left-[18%] sm:bottom-[8%]",
    icon: CheckCheck,
    delay: 0.4,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
];

function OrbitalIcon({ className, icon: Icon, delay, size }) {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.84 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.72, delay }}
      className={`absolute ${className}`}
    >
      <Motion.div
        animate={{
          y: [0, -9, 0],
          boxShadow: [
            "0 0 0 rgba(255,186,96,0.1)",
            "0 0 32px rgba(255,186,96,0.24)",
            "0 0 0 rgba(255,186,96,0.1)",
          ],
        }}
        transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`flex ${size} items-center justify-center rounded-full border border-[#dba257]/70 bg-[#57101d]/34 backdrop-blur-xl`}
      >
        <Icon className="h-7 w-7 text-[#efb566] sm:h-10 sm:w-10" strokeWidth={1.55} />
      </Motion.div>
    </Motion.div>
  );
}

function Spark({ className, delay }) {
  return (
    <Motion.span
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: [0.28, 1, 0.28], scale: [0.86, 1.18, 0.86] }}
      transition={{ duration: 2.8, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className} h-2.5 w-2.5 rounded-full bg-[#ffc86b] shadow-[0_0_20px_rgba(255,200,110,0.85)]`}
    />
  );
}

export default function OpeningSlide({ currentIndex, totalSlides }) {
  return (
    <section className="relative min-h-full overflow-hidden text-[#f8e2af]">
      <Motion.img
        src={openingBase}
        alt=""
        initial={{ scale: 1.04, opacity: 0.55 }}
        animate={{ scale: 1, opacity: 0.96 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(255,96,30,0.12),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(76,109,255,0.2),transparent_20%),linear-gradient(180deg,rgba(18,4,12,0.04),rgba(10,6,17,0.22))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(10,7,15,0),rgba(10,7,15,0.48))]" />

      <div className="relative z-10 flex min-h-full flex-col px-6 pb-6 pt-8 sm:px-10 sm:pb-8 lg:px-12 lg:pb-10 lg:pt-10">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72 }}
              className="inline-flex w-fit items-center gap-4 rounded-full border border-[#d89f58] bg-[#5c0d16]/55 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c57b] shadow-[0_0_24px_rgba(201,119,34,0.16)] backdrop-blur-md sm:px-6 sm:text-base"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8a35d] bg-[#8a1b16]/70 text-[#f7c773] shadow-[0_0_18px_rgba(247,199,115,0.22)]">
                <Sparkles className="h-5 w-5" strokeWidth={2} />
              </span>
              Chủ đề học tập
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.82, delay: 0.08 }}
              className="mt-8 max-w-4xl text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[0.88] tracking-[-0.05em] text-[#fbe2ad] drop-shadow-[0_8px_24px_rgba(39,5,9,0.36)]"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              Dân chủ và
              <br />
              dân chủ xã hội
              <br />
              chủ nghĩa
            </Motion.h1>

            <Motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.78, delay: 0.16 }}
              className="mt-8 flex origin-left items-center gap-4"
            >
              <span className="h-3 w-3 rounded-full bg-[#f3be69] shadow-[0_0_16px_rgba(243,190,105,0.75)]" />
              <span className="h-px max-w-xl flex-1 bg-gradient-to-r from-[#c98c36] via-[#f4c778] to-transparent" />
            </Motion.div>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="mt-7 max-w-3xl text-lg leading-relaxed text-[#f7d9a4]/95 sm:text-2xl"
            >
              Khái niệm, bản chất và quá trình phát triển
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <div className="rounded-full border border-[#e6b36a]/38 bg-[#0f0611]/46 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#fee7bc] backdrop-blur-md">
                Slide {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </div>
              <div className="rounded-full border border-[#e6b36a]/28 bg-[#ffffff08] px-4 py-2 text-sm text-[#f7d8a3]/82">
                Opening artwork đã được khóa cho pha 1
              </div>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.86, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex h-[360px] w-full max-w-[620px] items-center justify-center sm:h-[460px] lg:h-[640px]"
          >
            <Motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-0 rounded-full border border-[#bf7f36]/24" />
              <div className="absolute inset-[8%] rounded-full border border-[#dc9a4b]/42" />
              <div className="absolute inset-[15%] rounded-full border border-[#bb7631]/18 border-dashed" />
              <div className="absolute inset-[24%] rounded-full border border-[#df9f52]/34" />

              <div className="absolute inset-x-[14%] bottom-[16%] h-[31%] rounded-[50%] border border-[#bd7c37]/42 bg-[radial-gradient(circle_at_50%_16%,rgba(141,26,31,0.18),rgba(0,0,0,0)_72%)]" />

              <Spark className="left-[18%] top-[18%]" delay={0.12} />
              <Spark className="right-[16%] top-[8%]" delay={0.52} />
              <Spark className="right-[6%] top-[52%]" delay={1.06} />
              <Spark className="left-[24%] bottom-[6%]" delay={0.34} />
              <Spark className="left-[46%] top-[6%]" delay={0.84} />

              {orbitItems.map((item) => (
                <OrbitalIcon key={item.className} {...item} />
              ))}

              <Motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.78, delay: 0.28 }}
                className="absolute left-1/2 top-[17%] flex -translate-x-1/2 flex-col items-center text-[#efb25f]"
              >
                <Building2 className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" strokeWidth={1.2} />
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="absolute left-1/2 top-[43%] flex w-[72%] -translate-x-1/2 items-end justify-between text-[#efb25f]"
              >
                <Users className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" strokeWidth={1.3} />
                <Users className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36" strokeWidth={1.3} />
                <Users className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" strokeWidth={1.3} />
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.5 }}
                className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[#efb25f]"
              >
                <Handshake className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52" strokeWidth={1.2} />
              </Motion.div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,194,96,0.12),transparent_24%),radial-gradient(circle_at_56%_55%,rgba(255,109,36,0.14),transparent_44%)]" />
            </Motion.div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.76, delay: 0.32 }}
          className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2a552]/24 pt-4 text-sm text-[#f7d6a1]/82"
        >
          <p>Slide mở đầu dùng poster nền nội bộ + motion layer để giữ cảm giác gần reference.</p>
          <p className="rounded-full border border-[#e0ae65]/24 bg-[#ffffff08] px-4 py-2 uppercase tracking-[0.18em] text-[#ffdba9]">
            Nhấn Next để sang slide shell
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

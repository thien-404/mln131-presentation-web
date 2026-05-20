import { motion as Motion, useIsPresent } from "framer-motion";
import { Building2, Network, Star, Users } from "lucide-react";
import SlideBackdrop from "./shared/SlideBackdrop";

const displaySerifStyle = {
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontFeatureSettings: '"liga" 0, "clig" 0',
  fontKerning: "normal",
};

const shellVariants = {
  hidden: {
    opacity: 0,
    scale: 1.016,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.76,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.988,
    filter: "blur(10px)",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.98,
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    filter: "blur(8px)",
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -52 : index === 2 ? 52 : 0,
    y: 24,
    scale: 0.97,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (index) => ({
    opacity: 0,
    x: index === 0 ? -34 : index === 2 ? 34 : 0,
    y: 16,
    scale: 0.965,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const cardItems = [
  {
    title: "Nhân dân có\nđịa vị cao nhất",
    icon: Users,
    tone: "warm",
  },
  {
    title: "Nhà nước\nphục vụ\nnhân dân",
    icon: Building2,
    tone: "neutral",
  },
  {
    title: "Dân chủ bao quát\nmọi lĩnh vực\nđời sống",
    icon: Network,
    tone: "cool",
  },
];

const ambientDots = [
  { className: "left-[3.5%] top-[20%]", color: "bg-[#ff7d44]/80", size: "h-1 w-1", delay: 0.1 },
  { className: "left-[6.8%] top-[28%]", color: "bg-[#ff8a53]/85", size: "h-1.5 w-1.5", delay: 0.44 },
  { className: "left-[9.8%] bottom-[26%]", color: "bg-[#ff6528]/80", size: "h-1 w-1", delay: 0.84 },
  { className: "right-[15%] top-[14%]", color: "bg-[#ffcb73]/85", size: "h-1.5 w-1.5", delay: 0.24 },
  { className: "right-[20%] bottom-[28%]", color: "bg-[#ffcb73]/80", size: "h-1 w-1", delay: 0.72 },
  { className: "right-[6.5%] bottom-[8%]", color: "bg-[#3f73ff]/78", size: "h-1 w-1", delay: 1.08 },
];

function GlowDivider({ isPresent, className = "", glowClassName = "" }) {
  return (
    <Motion.div variants={fadeUpVariants} className={`relative mx-auto ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#dca358]/58 to-transparent" />
      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.42, 1, 0.42],
                scale: [0.9, 1.08, 0.9],
              }
            : { opacity: 0, scale: 0.8 }
        }
        transition={
          isPresent
            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[0.25rem] bg-[#ffcb73] shadow-[0_0_18px_rgba(255,187,102,0.95)] ${glowClassName}`}
      />
    </Motion.div>
  );
}

function CrestMark({ isPresent }) {
  return (
    <Motion.div
      animate={isPresent ? { y: [0, -3, 0] } : { opacity: 0, y: -10 }}
      transition={isPresent ? { duration: 4.8, repeat: Infinity, ease: "easeInOut" } : { duration: 0.18 }}
      className="relative flex h-[74px] w-[74px] items-center justify-center sm:h-[84px] sm:w-[84px]"
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="crestStroke" x1="16" y1="10" x2="104" y2="110">
            <stop offset="0" stopColor="#ffdb8f" />
            <stop offset="1" stopColor="#cf8f39" />
          </linearGradient>
          <radialGradient id="crestFill" cx="50%" cy="38%" r="66%">
            <stop offset="0" stopColor="#ad1014" />
            <stop offset="1" stopColor="#3d0809" />
          </radialGradient>
        </defs>

        <circle cx="60" cy="60" r="44" fill="url(#crestFill)" stroke="url(#crestStroke)" strokeWidth="3" />
        <circle cx="60" cy="60" r="31" fill="none" stroke="url(#crestStroke)" strokeWidth="2.4" opacity="0.9" />
        <polygon
          points="60,32 66.9,51 87,51 70.8,62.8 76.8,82 60,70.8 43.2,82 49.2,62.8 33,51 53.1,51"
          fill="#ffd36f"
          stroke="#f5be5f"
          strokeWidth="1.5"
        />
        <path
          d="M30 88C18 82 13 71 13 61C18 67 22 70 28 72"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M90 88C102 82 107 71 107 61C102 67 98 70 92 72"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M28 87C22 86 18 84 14 81"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M92 87C98 86 102 84 106 81"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-[12%] rounded-full shadow-[0_0_28px_rgba(255,150,72,0.28)]" />
    </Motion.div>
  );
}

function TopRibbon({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="relative pt-3 sm:pt-1">
      <div className="absolute left-0 right-0 top-0 flex items-center justify-center">
        <span className="h-px flex-1 bg-gradient-to-r from-[#dca65b]/35 via-[#dca65b]/18 to-transparent" />
        <Motion.span
          animate={
            isPresent
              ? { opacity: [0.74, 1, 0.74], scale: [0.94, 1.08, 0.94] }
              : { opacity: 0, scale: 0.8 }
          }
          transition={
            isPresent
              ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="mx-5 text-[#f2bd61]"
        >
          <Star className="h-8 w-8 fill-current sm:h-9 sm:w-9" strokeWidth={1.8} />
        </Motion.span>
        <span className="h-px flex-1 bg-gradient-to-l from-[#dca65b]/35 via-[#dca65b]/18 to-transparent" />
      </div>

      <div className="mt-5 flex items-center gap-5 rounded-[1.8rem] border border-[#d7a056]/20 bg-[linear-gradient(90deg,rgba(56,10,11,0.16),rgba(9,16,40,0.08))] px-6 py-4 backdrop-blur-sm sm:px-8">
        <CrestMark isPresent={isPresent} />
        <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#f1bf69] to-transparent" />
        <h2
          className="text-[clamp(1.95rem,3vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-[#f6d48a]"
          style={displaySerifStyle}
        >
          Tư tưởng Hồ Chí Minh về dân chủ
        </h2>
      </div>
    </Motion.div>
  );
}

function LotusDecoration({ isPresent }) {
  return (
    <div className="pointer-events-none absolute right-[1%] top-[10%] hidden h-[42%] w-[27%] lg:block">
      <div className="absolute inset-0 rounded-full border border-[#2756b6]/20" />
      <div className="absolute inset-[8%] rounded-full border border-[#2756b6]/16" />
      <div className="absolute inset-[16%] rounded-full border border-[#2756b6]/12" />

      <Motion.div
        animate={
          isPresent
            ? {
                opacity: [0.24, 0.42, 0.24],
                scale: [1, 1.02, 1],
              }
            : { opacity: 0, scale: 0.96 }
        }
        transition={
          isPresent
            ? { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute inset-[10%]"
      >
        <svg viewBox="0 0 420 420" className="h-full w-full" aria-hidden="true">
          <g fill="none" stroke="#4f79c9" strokeWidth="1.3" opacity="0.62">
            <path d="M210 314C228 266 231 220 210 176C189 220 192 266 210 314Z" />
            <path d="M210 314C262 282 284 235 276 182C238 208 218 252 210 314Z" />
            <path d="M210 314C158 282 136 235 144 182C182 208 202 252 210 314Z" />
            <path d="M210 298C314 286 366 220 360 126C292 150 244 208 210 298Z" />
            <path d="M210 298C106 286 54 220 60 126C128 150 176 208 210 298Z" />
            <path d="M210 250C270 222 292 164 280 104C244 132 220 182 210 250Z" />
            <path d="M210 250C150 222 128 164 140 104C176 132 200 182 210 250Z" />
          </g>
        </svg>
      </Motion.div>
    </div>
  );
}

function QuoteBlock({ isPresent }) {
  return (
    <Motion.div variants={quoteVariants} className="relative mx-auto mt-8 max-w-[1280px] text-center sm:mt-10">
      <Motion.span
        animate={isPresent ? { opacity: [0.7, 1, 0.7], y: [0, -2, 0] } : { opacity: 0, y: -6 }}
        transition={
          isPresent
            ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute left-[10%] top-[2%] text-[clamp(4rem,6vw,6.6rem)] font-bold leading-none text-[#f2c66d]"
        style={displaySerifStyle}
      >
        “
      </Motion.span>

      <h1
        className="relative z-10 text-[clamp(4.4rem,7vw,8.2rem)] font-bold leading-[0.94] tracking-[-0.05em] text-[#f7d37d] drop-shadow-[0_14px_30px_rgba(42,7,11,0.34)]"
        style={displaySerifStyle}
      >
        Dân là chủ
        <br />
        và dân làm chủ
      </h1>

      <Motion.span
        animate={isPresent ? { opacity: [0.7, 1, 0.7], y: [0, 2, 0] } : { opacity: 0, y: 6 }}
        transition={
          isPresent
            ? { duration: 3.2, delay: 0.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute bottom-[-4%] right-[8%] text-[clamp(4rem,6vw,6.6rem)] font-bold leading-none text-[#f2c66d]"
        style={displaySerifStyle}
      >
        ”
      </Motion.span>
    </Motion.div>
  );
}

function InsightCard({ item, index, isPresent }) {
  const Icon = item.icon;
  const frameTone =
    item.tone === "warm"
      ? "border-[#e56f45]/58 bg-[linear-gradient(180deg,rgba(83,15,17,0.7),rgba(45,10,17,0.46))]"
      : item.tone === "cool"
        ? "border-[#5078c8]/46 bg-[linear-gradient(180deg,rgba(7,27,66,0.72),rgba(7,17,42,0.5))]"
        : "border-[#c48e53]/44 bg-[linear-gradient(180deg,rgba(33,18,31,0.72),rgba(16,13,28,0.52))]";

  const innerGlow =
    item.tone === "warm"
      ? "bg-[radial-gradient(circle_at_left,rgba(255,96,39,0.14),transparent_38%)]"
      : item.tone === "cool"
        ? "bg-[radial-gradient(circle_at_right,rgba(66,117,255,0.12),transparent_38%)]"
        : "bg-[radial-gradient(circle_at_center,rgba(255,144,76,0.08),transparent_40%)]";

  const dotTone = item.tone === "cool" ? "bg-[#6aa5ff]" : "bg-[#ff7a46]";
  const iconTone = item.tone === "cool" ? "text-[#ffcf7d]" : "text-[#f3c56d]";

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className={`relative overflow-hidden rounded-[2rem] border ${frameTone} px-6 py-5 shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-sm`}
    >
      <div className={`pointer-events-none absolute inset-0 ${innerGlow}`} />
      <div className="pointer-events-none absolute inset-x-[6%] top-8 h-px bg-gradient-to-r from-transparent via-[#f1bf69]/16 to-transparent" />

      <div className="relative z-10 flex min-h-[166px] items-center gap-5">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 0 0 rgba(255,190,98,0.08)",
                    "0 0 26px rgba(255,190,98,0.16)",
                    "0 0 0 rgba(255,190,98,0.08)",
                  ],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={
            isPresent
              ? { duration: 3.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#dca45b]/70 ${iconTone}`}
        >
          <Icon className="h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14" strokeWidth={1.35} />
        </Motion.div>

        <h3
          className="whitespace-pre-line text-[1.52rem] leading-[1.15] text-[#f8e0b0] sm:text-[1.72rem] xl:text-[1.9rem]"
          style={displaySerifStyle}
        >
          {item.title}
        </h3>
      </div>

      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.55, 1, 0.55],
                scale: [0.9, 1.15, 0.9],
              }
            : { opacity: 0 }
        }
        transition={
          isPresent
            ? { duration: 2.6, delay: index * 0.16, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className={`absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 rounded-[0.2rem] ${dotTone} shadow-[0_0_16px_currentColor]`}
      />
    </Motion.article>
  );
}

function BottomLaurel({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="mx-auto mt-8 flex w-full max-w-[420px] items-center justify-center gap-4 sm:mt-7">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d39a52]/45 to-[#d39a52]/12" />

      <Motion.div
        animate={isPresent ? { y: [0, -2, 0], opacity: [0.7, 1, 0.7] } : { opacity: 0, y: 6 }}
        transition={
          isPresent
            ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#dda24c]"
      >
        <svg viewBox="0 0 120 30" className="h-8 w-28" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M60 24C54 18 44 14 28 10" />
            <path d="M60 24C66 18 76 14 92 10" />
            <path d="M50 20L44 12" />
            <path d="M42 18L36 11" />
            <path d="M34 16L28 10" />
            <path d="M70 20L76 12" />
            <path d="M78 18L84 11" />
            <path d="M86 16L92 10" />
          </g>
        </svg>
      </Motion.div>

      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d39a52]/45 to-[#d39a52]/12" />
    </Motion.div>
  );
}

export default function HoChiMinhDemocracySlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <SlideBackdrop variant="hoChiMinh" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_44%,rgba(255,88,24,0.2),transparent_28%),radial-gradient(circle_at_88%_46%,rgba(38,92,216,0.18),transparent_26%),linear-gradient(180deg,rgba(5,7,20,0.06),rgba(5,7,20,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[42%] bg-[linear-gradient(90deg,rgba(62,10,10,0.26),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[40%] bg-[linear-gradient(270deg,rgba(12,28,74,0.2),transparent)]" />

      <div className="pointer-events-none absolute bottom-[-13%] left-[-11%] h-[54%] w-[40%] rounded-full border border-[#ff6e2f]/20" />
      <div className="pointer-events-none absolute bottom-[-8%] left-[-6%] h-[46%] w-[34%] rounded-full border border-[#ff6e2f]/14" />
      <div className="pointer-events-none absolute bottom-[-3%] left-[-1%] h-[38%] w-[29%] rounded-full border border-[#ff6e2f]/10" />

      <LotusDecoration isPresent={isPresent} />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.24, 1, 0.24],
                  scale: [0.82, 1.18, 0.82],
                }
              : { opacity: 0 }
          }
          transition={
            isPresent
              ? { duration: 2.8, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`absolute ${dot.className} ${dot.size} ${dot.color} rounded-full shadow-[0_0_14px_currentColor]`}
        />
      ))}

      <div className="relative z-10 h-full p-4 sm:p-6">
        <div className="mx-auto flex h-full max-w-[1620px] flex-col overflow-hidden rounded-[2.2rem] border border-[#c7934b]/62 px-7 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:px-10 sm:py-6">
          <TopRibbon isPresent={isPresent} />

          <GlowDivider isPresent={isPresent} className="mt-4 w-full" />

          <div className="relative flex min-h-0 flex-1 flex-col">
            <QuoteBlock isPresent={isPresent} />

            <GlowDivider isPresent={isPresent} className="mt-7 w-[44%] max-w-[560px]" />

            <div className="mt-7 grid gap-5 lg:mt-auto lg:grid-cols-3 xl:gap-6">
              {cardItems.map((item, index) => (
                <InsightCard key={item.title} item={item} index={index} isPresent={isPresent} />
              ))}
            </div>

            <BottomLaurel isPresent={isPresent} />
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

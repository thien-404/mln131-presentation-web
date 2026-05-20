import { motion as Motion, useIsPresent } from "framer-motion";
import { Star } from "lucide-react";
import slide11Background from "../../background/slide11bg.png";

const displaySerifStyle = {
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontFeatureSettings: '"liga" 0, "clig" 0',
  fontKerning: "normal",
};

const shellVariants = {
  hidden: {
    opacity: 0,
    scale: 1.014,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.74,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.988,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -26, scale: 0.985, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.98,
    filter: "blur(8px)",
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0.68 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scaleX: 0.8,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -46 : index === 3 ? 46 : 0,
    y: 34,
    scale: 0.965,
    filter: "blur(9px)",
  }),
  show: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      delay: 0.12 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (index) => ({
    opacity: 0,
    x: index === 0 ? -24 : index === 3 ? 24 : 0,
    y: 18,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const ambientDots = [
  { className: "left-[19.2%] top-[11%]", color: "bg-[#ff6c32]/85", size: "h-1.5 w-1.5", delay: 0.08 },
  { className: "left-[41.2%] top-[23.4%]", color: "bg-[#ff7a35]/90", size: "h-2 w-2", delay: 0.34 },
  { className: "right-[13.5%] bottom-[38%]", color: "bg-[#ff7b3e]/82", size: "h-1.5 w-1.5", delay: 0.72 },
  { className: "right-[5%] top-[61.5%]", color: "bg-[#ff8748]/78", size: "h-1 w-1", delay: 1.04 },
];

const cardItems = [
  {
    number: "01",
    title: "Nhân dân lao động\ngiành chính quyền",
    icon: PeopleFlagIcon,
  },
  {
    number: "02",
    title: "Hướng tới\ncông bằng xã hội",
    icon: BalanceScaleIcon,
  },
  {
    number: "03",
    title: "Xóa bỏ\náp bức, bóc lột",
    icon: BrokenChainIcon,
  },
  {
    number: "04",
    title: "Nhân dân tham gia\nquản lý xã hội",
    icon: GovernmentPeopleIcon,
  },
];

function PeopleFlagIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M72 101V47" strokeWidth="4" />
        <path d="M75 48c14-9 25 7 40-2v31c-15 9-26-7-40 2Z" strokeWidth="4" />
        <path d="M32 103V82c0-12 8-20 20-20s20 8 20 20v21" strokeWidth="4" />
        <path d="M43 103V84" strokeWidth="4" />
        <circle cx="52" cy="45" r="13" strokeWidth="4" />
        <path d="M82 103V80c0-13 9-22 22-22s22 9 22 22v23" strokeWidth="4" />
        <path d="M96 103V84" strokeWidth="4" />
        <circle cx="104" cy="40" r="14" strokeWidth="4" />
        <path d="M124 103V86c0-10 7-17 17-17s17 7 17 17v17" strokeWidth="4" />
        <path d="M137 103V88" strokeWidth="4" />
        <circle cx="141" cy="55" r="11" strokeWidth="4" />
      </g>
    </svg>
  );
}

function BalanceScaleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 24v72" strokeWidth="4.4" />
        <path d="M57 96h46" strokeWidth="4.4" />
        <path d="M66 86h28" strokeWidth="4.4" />
        <path d="M42 34c22-10 54-10 76 0" strokeWidth="4" />
        <circle cx="80" cy="33" r="6" strokeWidth="4" />
        <path d="M44 34 24 78h40Z" strokeWidth="4" />
        <path d="M136 78 116 34 96 78Z" strokeWidth="4" />
        <path d="M23 78c7 12 34 12 42 0" strokeWidth="4" />
        <path d="M95 78c7 12 34 12 42 0" strokeWidth="4" />
        <path d="M42 34 24 78" strokeWidth="4" />
        <path d="m42 34 22 44" strokeWidth="4" />
        <path d="M118 34 96 78" strokeWidth="4" />
        <path d="m118 34 18 44" strokeWidth="4" />
      </g>
    </svg>
  );
}

function BrokenChainIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M42 81 27 92c-9 7-22-5-15-15l16-21c6-8 18-10 26-4l10 7"
          strokeWidth="4.4"
        />
        <path
          d="m55 72 31-21"
          strokeWidth="4.4"
        />
        <path
          d="m96 58 11 8c8 6 20 4 26-4l16-21c7-10-6-22-15-15l-16 12"
          strokeWidth="4.4"
        />
        <path
          d="m75 78-12 8M90 42l12-8"
          strokeWidth="4.4"
        />
        <path d="M79 33V18M79 104V89M49 42 37 30M111 91l-12-12M36 66H20M141 66h-16M52 91l-12 12M112 41l12-12" strokeWidth="3.4" />
        <path d="M74 63c-3-7 2-15 10-15" strokeWidth="4.4" />
        <path d="M88 60c3 7-2 15-10 15" strokeWidth="4.4" />
      </g>
    </svg>
  );
}

function GovernmentPeopleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 50h72" strokeWidth="4" />
        <path d="M53 50v33M80 50v33M107 50v33" strokeWidth="4" />
        <path d="M42 91h76" strokeWidth="4" />
        <path d="M35 42 80 20l45 22Z" strokeWidth="4" />
        <path d="M80 20v-17" strokeWidth="4" />
        <path d="M82 4c7 4 13-2 20 2v15c-7-4-13 2-20-2Z" strokeWidth="3.4" />
        <circle cx="80" cy="35" r="3.5" fill="currentColor" stroke="none" />
        <circle cx="80" cy="73" r="13" strokeWidth="4" />
        <path d="M57 114v-8c0-14 9-22 23-22s23 8 23 22v8" strokeWidth="4" />
        <path d="M70 114v-9M90 114v-9" strokeWidth="4" />
        <circle cx="43" cy="80" r="10" strokeWidth="4" />
        <path d="M21 114v-8c0-12 8-19 22-19 7 0 12 2 16 6" strokeWidth="4" />
        <path d="M34 114v-8" strokeWidth="4" />
        <circle cx="117" cy="80" r="10" strokeWidth="4" />
        <path d="M101 93c4-4 9-6 16-6 14 0 22 7 22 19v8" strokeWidth="4" />
        <path d="M126 114v-8" strokeWidth="4" />
      </g>
    </svg>
  );
}

function DecorativeArcs() {
  const paths = [
    "M-58 120C110 92 170 4 350-42",
    "M-44 100C124 76 205-16 390-70",
    "M-26 78C130 60 228-34 438-94",
    "M-8 54C148 44 258-48 494-116",
    "M18 26C168 22 290-70 550-144",
  ];

  return (
    <svg
      viewBox="0 0 560 220"
      className="pointer-events-none absolute -left-8 -top-9 hidden h-[28%] w-[34%] min-w-[420px] sm:block"
      aria-hidden="true"
    >
      <g fill="none" strokeLinecap="round">
        {paths.map((path, index) => (
          <path
            key={path}
            d={path}
            stroke={index % 2 === 0 ? "#ff713b" : "#d53125"}
            strokeWidth={index === 0 ? 1.4 : 1}
            opacity={0.52 - index * 0.06}
          />
        ))}
      </g>
    </svg>
  );
}

function TitleDivider({ isPresent }) {
  return (
    <Motion.div
      variants={dividerVariants}
      className="mx-auto mt-[clamp(1.1rem,3vh,2rem)] flex w-full max-w-[620px] origin-center items-center gap-5 sm:gap-7"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b33b25]/75 to-[#ffd35d]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.66, 1, 0.66], scale: [0.92, 1.12, 0.92], y: [0, -1, 0] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffbe4a] drop-shadow-[0_0_18px_rgba(255,125,48,0.9)]"
      >
        <Star className="h-7 w-7 fill-current sm:h-8 sm:w-8" strokeWidth={1.75} />
      </Motion.span>

      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b33b25]/75 to-[#ffd35d]" />
    </Motion.div>
  );
}

function StepBadge({ number, isPresent, index }) {
  return (
    <Motion.div
      animate={
        isPresent
          ? {
              boxShadow: [
                "0 0 0 rgba(255,126,45,0.12)",
                "0 0 28px rgba(255,126,45,0.34)",
                "0 0 0 rgba(255,126,45,0.12)",
              ],
            }
          : { opacity: 0, scale: 0.9 }
      }
      transition={
        isPresent
          ? { duration: 3.2, delay: index * 0.14, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.18 }
      }
      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ffba54]/75 bg-[radial-gradient(circle_at_48%_28%,#ff8135_0%,#b41a1f_58%,#6f1218_100%)] text-[#fff0bf] shadow-[inset_0_0_18px_rgba(255,212,120,0.18),0_10px_26px_rgba(0,0,0,0.24)] sm:h-14 sm:w-14 lg:h-[4.55rem] lg:w-[4.55rem]"
    >
      <span
        className="text-[1.45rem] font-bold leading-none tracking-[-0.04em] sm:text-[1.65rem] lg:text-[2.15rem]"
        style={displaySerifStyle}
      >
        {number}
      </span>
    </Motion.div>
  );
}

function CardDivider({ isPresent, index }) {
  return (
    <div className="relative mx-auto mb-3 mt-3 flex w-[58%] max-w-[190px] items-center justify-center sm:mb-4 sm:mt-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b83f28]/70 to-[#ffcc58]" />
      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.62, 1, 0.62], scale: [0.92, 1.12, 0.92] }
            : { opacity: 0, scale: 0.84 }
        }
        transition={
          isPresent
            ? { duration: 2.6, delay: index * 0.1, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="mx-2 text-[#ffbf45] drop-shadow-[0_0_14px_rgba(255,113,38,0.95)]"
      >
        <Star className="h-4 w-4 fill-current" strokeWidth={1.8} />
      </Motion.span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b83f28]/70 to-[#ffcc58]" />
    </div>
  );
}

function HistoryCard({ item, index, isPresent }) {
  const Icon = item.icon;

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className="relative min-h-[190px] overflow-hidden rounded-[1.35rem] border border-[#ef7c42]/80 bg-[linear-gradient(180deg,rgba(58,16,55,0.72)_0%,rgba(18,19,50,0.82)_50%,rgba(6,14,37,0.78)_100%)] shadow-[0_22px_52px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(255,205,110,0.06)] backdrop-blur-[2px] sm:min-h-[235px] sm:rounded-[1.65rem] lg:h-[clamp(22rem,45vh,26.8rem)] lg:min-h-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_46%_0%,rgba(255,91,35,0.16),transparent_22%),radial-gradient(circle_at_100%_92%,rgba(42,95,222,0.18),transparent_34%),linear-gradient(135deg,rgba(255,96,44,0.06),transparent_44%,rgba(66,107,255,0.06))]" />
      <div className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#ffd16c] to-transparent" />
      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.42, 1, 0.42], scaleX: [0.82, 1.16, 0.82] }
            : { opacity: 0 }
        }
        transition={
          isPresent
            ? { duration: 2.7, delay: index * 0.14, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute left-1/2 top-0 h-[2px] w-[35%] -translate-x-1/2 rounded-full bg-[#ff8838] shadow-[0_0_18px_rgba(255,123,45,0.95)]"
      />

      <div className="relative z-10 flex h-full flex-col items-center px-3 py-5 text-center sm:px-5 sm:py-6 lg:px-7 lg:py-7">
        <StepBadge number={item.number} isPresent={isPresent} index={index} />

        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -4, 0],
                  opacity: [0.9, 1, 0.9],
                }
              : { opacity: 0, scale: 0.9 }
          }
          transition={
            isPresent
              ? { duration: 3.5 + index * 0.22, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex min-h-0 flex-1 items-center justify-center pt-4 text-[#f6c96f] drop-shadow-[0_0_16px_rgba(255,142,58,0.32)] sm:pt-5 lg:pt-7"
        >
          <Icon className="h-[4.7rem] w-[5.9rem] sm:h-[6rem] sm:w-[7.6rem] lg:h-[8rem] lg:w-[10rem] xl:h-[8.6rem] xl:w-[10.8rem]" />
        </Motion.div>

        <CardDivider isPresent={isPresent} index={index} />

        <h3 className="min-h-[2.95rem] whitespace-pre-line text-center text-[0.88rem] font-medium leading-[1.38] text-[#fff0d2] drop-shadow-[0_4px_18px_rgba(0,0,0,0.38)] sm:min-h-[3.7rem] sm:text-[1.12rem] md:text-[1.28rem] lg:min-h-[5.35rem] lg:text-[clamp(1.14rem,1.72vw,1.95rem)]">
          {item.title}
        </h3>
      </div>
    </Motion.article>
  );
}

export default function SocialistHistoryDemocracySlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden bg-[#030611] text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <img
        src={slide11Background}
        alt="Nền slide dân chủ xã hội chủ nghĩa trong lịch sử"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(3,8,27,0.2)_42%,rgba(2,6,18,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_68%,rgba(255,64,22,0.1),transparent_26%),radial-gradient(circle_at_83%_61%,rgba(46,98,232,0.13),transparent_28%),radial-gradient(circle_at_50%_18%,rgba(9,18,54,0.44),transparent_48%)]" />
      <DecorativeArcs />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.22, 1, 0.22],
                  scale: [0.82, 1.16, 0.82],
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 py-5 sm:px-7 sm:py-7 lg:px-10">
        <div className="flex flex-col items-center pt-[clamp(1.35rem,11.5vh,7.7rem)]">
          <Motion.div variants={titleVariants} className="w-full">
            <h1
              className="mx-auto max-w-[1540px] bg-[linear-gradient(180deg,#fff5c9_0%,#ffe197_27%,#ffb84f_62%,#e97924_100%)] bg-clip-text px-1 text-center text-[clamp(2.05rem,4.85vw,5.35rem)] font-bold leading-[0.96] tracking-[-0.045em] text-transparent drop-shadow-[0_10px_28px_rgba(255,120,44,0.14)] xl:whitespace-nowrap"
              style={displaySerifStyle}
            >
              Dân chủ xã hội chủ nghĩa trong lịch sử
            </h1>
          </Motion.div>

          <TitleDivider isPresent={isPresent} />
        </div>

        <div className="mt-[clamp(1.8rem,7.2vh,5.8rem)] grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 xl:gap-7">
          {cardItems.map((item, index) => (
            <HistoryCard key={item.number} item={item} index={index} isPresent={isPresent} />
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

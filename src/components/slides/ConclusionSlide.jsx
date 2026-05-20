import { motion as Motion, useIsPresent } from "framer-motion";
import { Star } from "lucide-react";

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const timelineVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 24,
    x: index === 0 ? -32 : index === 3 ? 32 : 0,
    scale: 0.97,
    filter: "blur(8px)",
  }),
  show: (index) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.62, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 16,
    x: index === 0 ? -18 : index === 3 ? 18 : 0,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  }),
};

const conclusionPoints = [
  "Dân chủ phát triển qua từng thời kỳ lịch sử",
  "Mỗi nền dân chủ mang bản chất giai cấp nhất định",
  "Dân chủ xã hội chủ nghĩa hướng tới lợi ích của đa số nhân dân",
];

const timelineItems = ["Nguyên thủy", "Chủ nô", "Tư sản", "Xã hội chủ nghĩa"];

const ambientDots = [
  { className: "left-[8.5%] top-[15%]", color: "bg-[#ff6d31]/82", size: "h-1 w-1", delay: 0.12 },
  { className: "left-[5.9%] top-[42%]", color: "bg-[#ff7f3c]/78", size: "h-1 w-1", delay: 0.66 },
  { className: "right-[2.4%] bottom-[13%]", color: "bg-[#ff8e3e]/76", size: "h-1.5 w-1.5", delay: 0.34 },
  { className: "right-[7.2%] bottom-[28%]", color: "bg-[#356dff]/70", size: "h-1 w-1", delay: 0.94 },
];

function ConclusionBackdrop() {
  const topArcs = [
    "M-72 124C72 104 160 22 330 -38",
    "M-48 104C100 82 198 -10 392 -72",
    "M-26 84C126 66 240 -28 468 -100",
    "M-4 60C154 50 282 -52 540 -132",
    "M20 32C180 32 324 -78 616 -164",
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(111,26,29,0.34),transparent_32%),radial-gradient(circle_at_12%_64%,rgba(255,73,25,0.11),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(41,99,225,0.14),transparent_28%),linear-gradient(135deg,#050b20_0%,#111024_42%,#06142f_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[linear-gradient(90deg,rgba(58,9,14,0.24),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[34%] bg-[linear-gradient(270deg,rgba(7,24,68,0.24),transparent)]" />

      <svg
        viewBox="0 0 620 220"
        className="pointer-events-none absolute -left-6 -top-8 hidden h-[27%] w-[38%] min-w-[430px] sm:block"
        aria-hidden="true"
      >
        <g fill="none" strokeLinecap="round">
          {topArcs.map((path, index) => (
            <path
              key={path}
              d={path}
              stroke={index % 2 === 0 ? "#ff713b" : "#cf2f28"}
              strokeWidth={index === 0 ? 1.5 : 1}
              opacity={0.52 - index * 0.055}
            />
          ))}
        </g>
      </svg>

      <svg viewBox="0 0 1680 945" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g fill="none" strokeLinecap="round">
          <path d="M-20 844C154 800 284 868 450 854C616 840 724 782 888 792C1052 802 1170 874 1342 854C1506 836 1594 790 1704 806" stroke="#ff7036" strokeWidth="2" opacity="0.2" />
          <path d="M-20 894C158 844 312 914 486 896C660 878 774 826 940 838C1106 850 1226 914 1400 890C1538 870 1612 842 1704 854" stroke="#b8332b" strokeWidth="1.4" opacity="0.19" />
          <path d="M972 838C1112 800 1230 874 1370 856C1508 838 1580 788 1706 808" stroke="#3471ff" strokeWidth="1.7" opacity="0.22" />
          <path d="M1068 792C1180 760 1308 812 1430 798C1538 786 1604 748 1700 764" stroke="#2d65de" strokeWidth="1.2" opacity="0.16" />
        </g>
      </svg>
    </>
  );
}

function TitleDivider({ isPresent, className = "mt-3 max-w-[620px]" }) {
  return (
    <Motion.div variants={fadeUpVariants} className={`mx-auto flex w-full items-center gap-4 sm:gap-6 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b33b25]/75 to-[#ffd35d]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.66, 1, 0.66], scale: [0.9, 1.12, 0.9], y: [0, -1, 0] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffbe4a] drop-shadow-[0_0_18px_rgba(255,125,48,0.9)]"
      >
        <Star className="h-6 w-6 fill-current sm:h-7 sm:w-7" strokeWidth={1.75} />
      </Motion.span>

      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b33b25]/75 to-[#ffd35d]" />
    </Motion.div>
  );
}

function BulletStar({ index, isPresent }) {
  return (
    <Motion.span
      animate={
        isPresent
          ? {
              opacity: [0.7, 1, 0.7],
              scale: [0.9, 1.15, 0.9],
              rotate: [0, 45, 0],
            }
          : { opacity: 0, scale: 0.8 }
      }
      transition={
        isPresent
          ? { duration: 2.8, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.18 }
      }
      className="mt-1 shrink-0 text-[#ffc25a] drop-shadow-[0_0_16px_rgba(255,112,43,0.9)]"
    >
      <Star className="h-6 w-6 fill-current sm:h-7 sm:w-7" strokeWidth={1.75} />
    </Motion.span>
  );
}

function ConclusionPanel({ isPresent }) {
  return (
    <Motion.section
      variants={fadeUpVariants}
      className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[1.6rem] border border-[#ff7740]/82 bg-[linear-gradient(180deg,rgba(55,15,45,0.7)_0%,rgba(17,21,54,0.83)_50%,rgba(7,17,43,0.84)_100%)] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(255,214,118,0.06)] backdrop-blur-[2px] sm:rounded-[2rem] sm:px-10 sm:py-8 lg:px-14 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_10%,rgba(255,81,35,0.16),transparent_28%),radial-gradient(circle_at_100%_86%,rgba(48,97,230,0.16),transparent_30%),linear-gradient(135deg,rgba(255,100,47,0.06),transparent_42%,rgba(68,104,255,0.05))]" />
      <span className="absolute left-1/2 top-0 h-[2px] w-[38%] -translate-x-1/2 rounded-full bg-[#ff8b3e] shadow-[0_0_24px_rgba(255,125,45,0.95)]" />
      <span className="absolute bottom-0 left-1/2 h-[2px] w-[50%] -translate-x-1/2 rounded-full bg-[#ff6d32] shadow-[0_0_30px_rgba(255,87,34,0.95)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1060px] space-y-4 sm:space-y-5 lg:space-y-6">
          {conclusionPoints.map((point, index) => (
            <Motion.div
              key={point}
              variants={fadeUpVariants}
              className="flex items-start gap-5 text-left sm:gap-7"
            >
              <BulletStar index={index} isPresent={isPresent} />
              <p className="text-[1.08rem] font-medium leading-[1.32] text-[#fff4e5] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-[1.55rem] lg:text-[2.05rem]">
                {point}
              </p>
            </Motion.div>
          ))}
        </div>

        <TitleDivider isPresent={isPresent} className="mt-8 max-w-[820px] sm:mt-9" />

        <Motion.h2
          variants={fadeUpVariants}
          className="mx-auto mt-7 bg-[linear-gradient(180deg,#fff6c9_0%,#ffe198_26%,#ffc05d_60%,#e78328_100%)] bg-clip-text text-center text-[clamp(2.6rem,6.3vw,6.05rem)] font-bold leading-[0.96] tracking-[-0.045em] text-transparent drop-shadow-[0_12px_30px_rgba(255,125,44,0.16)] sm:mt-9"
          style={displaySerifStyle}
        >
          Quyền lực thuộc về nhân dân
        </Motion.h2>
      </div>
    </Motion.section>
  );
}

function TimelineArrow({ isPresent, index }) {
  return (
    <Motion.div
      animate={
        isPresent
          ? { opacity: [0.6, 1, 0.6], x: [0, 3, 0] }
          : { opacity: 0, x: -8 }
      }
      transition={
        isPresent
          ? { duration: 2.6, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.18 }
      }
      className="relative hidden h-px flex-1 min-w-[42px] bg-gradient-to-r from-[#ffffff20] via-[#ffe09d] to-[#ffffff20] lg:block"
    >
      <span className="absolute right-[-1px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-l-[18px] border-y-transparent border-l-[#ffe6a6] drop-shadow-[0_0_12px_rgba(255,154,66,0.92)]" />
    </Motion.div>
  );
}

function TimelineStep({ label, index, isPresent }) {
  return (
    <Motion.div
      custom={index}
      variants={timelineVariants}
      className="relative flex min-h-[72px] items-center justify-center rounded-[0.9rem] border border-[#f2a447]/85 bg-[linear-gradient(180deg,rgba(13,25,58,0.82),rgba(7,17,43,0.78))] px-4 text-center shadow-[0_16px_42px_rgba(0,0,0,0.28),inset_0_0_0_1px_rgba(255,211,118,0.06)] backdrop-blur-[2px] sm:min-h-[86px] sm:px-6 lg:min-h-[110px] lg:w-[300px]"
    >
      <span className="absolute inset-x-[22%] top-0 h-px bg-gradient-to-r from-transparent via-[#ffd475] to-transparent" />
      <span className="absolute bottom-0 left-1/2 h-[2px] w-[38%] -translate-x-1/2 rounded-full bg-[#ff7b36] shadow-[0_0_18px_rgba(255,117,54,0.86)]" />
      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.18, 0.36, 0.18], scaleX: [0.82, 1.1, 0.82] }
            : { opacity: 0 }
        }
        transition={
          isPresent
            ? { duration: 3, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,112,43,0.18),transparent_48%)]"
      />
      <span className="relative z-10 text-[1rem] font-semibold leading-tight text-[#f9e2b8] sm:text-[1.25rem] lg:text-[1.72rem]">
        {label}
      </span>
    </Motion.div>
  );
}

function HistoricalTimeline({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="mx-auto mt-[clamp(1.2rem,4.2vh,2.6rem)] w-full max-w-[1500px]">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:flex lg:items-center lg:gap-0">
        {timelineItems.map((item, index) => (
          <div key={item} className="contents lg:flex lg:flex-1 lg:items-center">
            <TimelineStep label={item} index={index} isPresent={isPresent} />
            {index < timelineItems.length - 1 && <TimelineArrow isPresent={isPresent} index={index} />}
          </div>
        ))}
      </div>
    </Motion.div>
  );
}

export default function ConclusionSlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden bg-[#030611] text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <ConclusionBackdrop />

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
        <div className="flex flex-col items-center pt-[clamp(0.8rem,5.4vh,4rem)]">
          <Motion.div variants={titleVariants} className="w-full">
            <h1
              className="mx-auto bg-[linear-gradient(180deg,#fff5c9_0%,#ffe197_27%,#ffbd58_62%,#de7923_100%)] bg-clip-text px-1 text-center text-[clamp(3.4rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.045em] text-transparent drop-shadow-[0_12px_30px_rgba(255,125,44,0.16)]"
              style={displaySerifStyle}
            >
              Kết luận
            </h1>
          </Motion.div>

          <TitleDivider isPresent={isPresent} />
        </div>

        <div className="mt-[clamp(1.25rem,3.4vh,2.4rem)] flex min-h-0 flex-1 flex-col">
          <ConclusionPanel isPresent={isPresent} />
          <HistoricalTimeline isPresent={isPresent} />
        </div>
      </div>
    </Motion.section>
  );
}

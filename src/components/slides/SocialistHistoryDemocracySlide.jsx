import { motion as Motion, useIsPresent } from "framer-motion";
import { useId } from "react";
import { HardHat, Landmark, Scale, Star, UsersRound } from "lucide-react";
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
      delayChildren: 0.06,
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
  hidden: { opacity: 0, scaleX: 0.76 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scaleX: 0.82,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -40 : index === 3 ? 40 : 0,
    y: 24,
    scale: 0.97,
    filter: "blur(8px)",
  }),
  show: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.66,
      delay: 0.1 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (index) => ({
    opacity: 0,
    x: index === 0 ? -22 : index === 3 ? 22 : 0,
    y: 16,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const ambientDots = [
  { className: "left-[2.1%] top-[12%]", color: "bg-[#ff6f32]/82", size: "h-1 w-1", delay: 0.08 },
  { className: "left-[7.2%] top-[22%]", color: "bg-[#ff8a42]/78", size: "h-1.5 w-1.5", delay: 0.34 },
  { className: "left-[6%] bottom-[18%]", color: "bg-[#ff5c24]/76", size: "h-1 w-1", delay: 0.82 },
  { className: "right-[8.5%] top-[26%]", color: "bg-[#4d7dff]/80", size: "h-1.5 w-1.5", delay: 0.22 },
  { className: "right-[4.6%] bottom-[20%]", color: "bg-[#3c73ff]/74", size: "h-1 w-1", delay: 0.92 },
];

const cardItems = [
  {
    number: "01",
    title: "Nhân dân lao động\ngiành chính quyền",
    icon: WorkersPowerIcon,
    desktopClassName: "left-[1.8%] top-[58%] h-[18.2%] w-[24.2%]",
  },
  {
    number: "02",
    title: "Hướng tới\ncông bằng xã hội",
    icon: Scale,
    desktopClassName: "left-[27.1%] top-[45.5%] h-[17.4%] w-[21.7%]",
  },
  {
    number: "03",
    title: "Xóa bỏ\náp bức, bóc lột",
    icon: BrokenChainIcon,
    desktopClassName: "left-[50.2%] top-[33%] h-[17.4%] w-[21.7%]",
  },
  {
    number: "04",
    title: "Nhân dân tham gia\nquản lý xã hội",
    icon: PeopleGovernmentIcon,
    desktopClassName: "left-[73%] top-[20.5%] h-[17.9%] w-[24.6%]",
  },
];

function WorkersPowerIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <UsersRound className="h-full w-full" strokeWidth={1.5} />
      <HardHat
        className="absolute left-1/2 top-[18%] h-[42%] w-[42%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,190,84,0.1),transparent_70%)] p-[2.5%]"
        strokeWidth={1.8}
      />
    </div>
  );
}

function BrokenChainIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path
          d="M17 37.5 8.7 45.8a6.2 6.2 0 0 0 8.8 8.8l8.6-8.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m47 26.5 8.3-8.3a6.2 6.2 0 1 0-8.8-8.8L38 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m22 42 20-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="m28.2 31.8 7.6-7.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="5 4"
        />
        <path
          d="M30.6 16.8v-6.2M30.6 53.4v-6.2M11.8 32H5.6M55 32h-6.2M18.3 19.8l-4.3-4.3M47 48.5l-4.3-4.3M18.3 44.2l-4.3 4.3M47 15.5l-4.3 4.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.82"
        />
      </svg>
    </div>
  );
}

function PeopleGovernmentIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Landmark className="absolute left-1/2 top-[4%] h-[66%] w-[66%] -translate-x-1/2" strokeWidth={1.45} />
      <UsersRound
        className="absolute bottom-[4%] left-1/2 h-[38%] w-[60%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,190,84,0.08),transparent_76%)] px-[3%]"
        strokeWidth={1.5}
      />
    </div>
  );
}

function TitleDivider({ isPresent }) {
  return (
    <Motion.div
      variants={dividerVariants}
      className="mx-auto mt-2 flex w-full max-w-[820px] items-center gap-3 sm:mt-3"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c87a1d]/85 to-[#f2c55f]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.62, 1, 0.62], scale: [0.92, 1.08, 0.92] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#f3b744]"
      >
        <Star className="h-5 w-5 fill-current sm:h-6 sm:w-6" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c87a1d]/85 to-[#f2c55f]" />
    </Motion.div>
  );
}

function StepNumber({ number, isPresent }) {
  return (
    <Motion.div
      animate={
        isPresent
          ? {
              boxShadow: [
                "0 0 0 rgba(255,170,72,0.08)",
                "0 0 26px rgba(255,170,72,0.18)",
                "0 0 0 rgba(255,170,72,0.08)",
              ],
            }
          : { opacity: 0, scale: 0.9 }
      }
      transition={
        isPresent
          ? { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.18 }
      }
      className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#f0b64a]/78 bg-[radial-gradient(circle_at_50%_36%,rgba(104,14,20,0.54),rgba(12,10,19,0.94)_76%)] text-[#f8cc63] shadow-[0_0_0_1px_rgba(255,190,102,0.1)] sm:h-[64px] sm:w-[64px] xl:h-[72px] xl:w-[72px]"
    >
      <span
        className="text-[1.7rem] font-bold leading-none tracking-[-0.045em] sm:text-[1.84rem] xl:text-[2.08rem]"
        style={displaySerifStyle}
      >
        {number}
      </span>
    </Motion.div>
  );
}

function StepCard({ item, index, isPresent, compact = false, className = "" }) {
  const Icon = item.icon;
  const paddingClassName = compact
    ? "px-4 py-4 sm:px-5"
    : "px-4 py-3.5 xl:px-5 xl:py-4";
  const titleClassName = compact
    ? "text-[1.02rem] leading-[1.22] sm:text-[1.14rem]"
    : "text-[clamp(1rem,1.08vw,1.38rem)] leading-[1.16]";
  const iconSizeClassName = compact
    ? "h-[2.9rem] w-[2.9rem] sm:h-[3.1rem] sm:w-[3.1rem]"
    : "h-[3rem] w-[3rem] xl:h-[3.45rem] xl:w-[3.45rem]";

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className={`relative overflow-hidden rounded-[1.6rem] border border-[#dfa22e]/85 bg-[linear-gradient(180deg,rgba(10,10,18,0.82),rgba(7,8,15,0.72))] shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,189,98,0.06)] backdrop-blur-[2px] ${paddingClassName} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,106,44,0.04),transparent_34%,rgba(42,92,214,0.05)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[24%] top-0 h-px bg-gradient-to-r from-transparent via-[#ffd589] to-transparent" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.42, 1, 0.42], scaleX: [0.86, 1.08, 0.86] }
            : { opacity: 0 }
        }
        transition={
          isPresent
            ? { duration: 2.8, delay: index * 0.12, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute left-1/2 top-0 h-[2px] w-[16%] -translate-x-1/2 rounded-full bg-[#ff9c44] shadow-[0_0_16px_rgba(255,149,72,0.92)]"
      />

      <div className="relative z-10 flex h-full items-center gap-3 xl:gap-4">
        <StepNumber number={item.number} isPresent={isPresent} />

        <span className="h-[56%] w-px shrink-0 bg-gradient-to-b from-transparent via-[#f2be64] to-transparent opacity-75" />

        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -3, 0],
                  opacity: [0.9, 1, 0.9],
                }
              : { opacity: 0, scale: 0.9 }
          }
          transition={
            isPresent
              ? { duration: 3.3 + index * 0.22, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`shrink-0 text-[#f4c54f] ${iconSizeClassName}`}
        >
          <Icon className="h-full w-full" />
        </Motion.div>

        <h3 className={`whitespace-pre-line text-left font-medium text-[#f7e6c6] ${titleClassName}`}>
          {item.title}
        </h3>
      </div>
    </Motion.article>
  );
}

function DesktopTimeline({ isPresent }) {
  const strokeId = useId().replace(/:/g, "");
  const glowId = useId().replace(/:/g, "");

  const segments = [
    { d: "M404 418 H434 L468 350", delay: 0.1 },
    { d: "M803 338 H836 L870 270", delay: 0.22 },
    { d: "M1180 258 H1210 L1244 190", delay: 0.34 },
    { d: "M1604 178 H1626 L1660 118", delay: 0.46 },
  ];

  const dots = [
    { cx: 468, cy: 350, delay: 0.16 },
    { cx: 870, cy: 270, delay: 0.28 },
    { cx: 1244, cy: 190, delay: 0.4 },
  ];

  return (
    <Motion.svg
      initial={{ opacity: 0 }}
      animate={isPresent ? { opacity: 1 } : { opacity: 0 }}
      transition={isPresent ? { duration: 0.42 } : { duration: 0.18 }}
      viewBox="0 0 1660 620"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={strokeId} x1="404" y1="418" x2="1660" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff8f42" />
          <stop offset="0.46" stopColor="#ffd278" />
          <stop offset="1" stopColor="#ffb657" />
        </linearGradient>
        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {segments.map((segment) => (
        <Motion.path
          key={segment.d}
          initial={{ pathLength: 0, opacity: 0.32 }}
          animate={isPresent ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={
            isPresent
              ? { duration: 0.52, delay: segment.delay, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.18 }
          }
          d={segment.d}
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        />
      ))}

      {dots.map((dot) => (
        <Motion.circle
          key={`${dot.cx}-${dot.cy}`}
          animate={
            isPresent
              ? {
                  opacity: [0.58, 1, 0.58],
                  scale: [0.92, 1.15, 0.92],
                }
              : { opacity: 0, scale: 0.82 }
          }
          transition={
            isPresent
              ? { duration: 2.3, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          cx={dot.cx}
          cy={dot.cy}
          r="8"
          fill="#f0b64a"
          filter={`url(#${glowId})`}
        />
      ))}

      <Motion.g
        animate={
          isPresent
            ? {
                opacity: [0.74, 1, 0.74],
                x: [0, 3, 0],
                y: [0, -2, 0],
              }
            : { opacity: 0, x: -6, y: 4 }
        }
        transition={
          isPresent
            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        filter={`url(#${glowId})`}
      >
        <path d="M1630 112 1658 100 1640 126 1636 113 1630 112Z" fill="#ffd26e" />
      </Motion.g>
    </Motion.svg>
  );
}

function MobileTimeline({ isPresent }) {
  return (
    <div className="relative mt-8 flex flex-col gap-4 lg:hidden">
      <div className="pointer-events-none absolute left-[1.95rem] top-10 bottom-10 w-px bg-gradient-to-b from-[#ff8c42] via-[#f2c45d] to-[#295bde]" />

      {cardItems.map((item, index) => (
        <div key={item.number} className="relative ml-6">
          <Motion.span
            animate={
              isPresent
                ? { opacity: [0.55, 1, 0.55], scale: [0.92, 1.16, 0.92] }
                : { opacity: 0, scale: 0.82 }
            }
            transition={
              isPresent
                ? { duration: 2.4, delay: 0.14 + index * 0.12, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.18 }
            }
            className="absolute left-[-1.7rem] top-[2.85rem] h-3 w-3 -translate-x-1/2 rounded-full bg-[#f0b64a] shadow-[0_0_14px_rgba(240,182,74,0.92)]"
          />

          <StepCard item={item} index={index} isPresent={isPresent} compact className="min-h-[118px]" />
        </div>
      ))}
    </div>
  );
}

function DesktopStage({ isPresent }) {
  return (
    <div className="relative hidden h-full w-full min-h-0 lg:block">
      <DesktopTimeline isPresent={isPresent} />

      {cardItems.map((item, index) => (
        <StepCard
          key={item.number}
          item={item}
          index={index}
          isPresent={isPresent}
          className={`absolute ${item.desktopClassName}`}
        />
      ))}
    </div>
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

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,17,0.34),rgba(3,6,17,0.24)_24%,rgba(3,6,17,0.1)_54%,rgba(3,6,17,0.34))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_65%,rgba(255,76,20,0.12),transparent_26%),radial-gradient(circle_at_86%_64%,rgba(42,101,230,0.14),transparent_24%)]" />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.24, 1, 0.24],
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1700px] flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col items-center pt-[2.6vh]">
          <Motion.div variants={titleVariants} className="w-full">
            <h1
              className="mx-auto max-w-[1480px] px-2 text-center text-[clamp(2.35rem,5vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.05em] text-transparent drop-shadow-[0_10px_26px_rgba(0,0,0,0.45)] bg-[linear-gradient(180deg,#fff1b2_0%,#ffd46e_36%,#f3b846_66%,#c67a19_100%)] bg-clip-text"
              style={displaySerifStyle}
            >
              Dân chủ xã hội chủ nghĩa trong lịch sử
            </h1>
          </Motion.div>

          <TitleDivider isPresent={isPresent} />
        </div>

        <div className="relative mt-5 min-h-0 flex-1 sm:mt-6 lg:mt-8">
          <MobileTimeline isPresent={isPresent} />
          <DesktopStage isPresent={isPresent} />
        </div>
      </div>
    </Motion.section>
  );
}

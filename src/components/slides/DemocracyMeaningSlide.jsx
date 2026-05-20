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
  hidden: { opacity: 0, y: -28, scale: 0.985, filter: "blur(8px)" },
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
  hidden: { opacity: 0, scaleX: 0.7 },
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
    x: index === 0 ? -48 : index === 3 ? 48 : 0,
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
  { className: "left-[1.2%] top-[26%]", color: "bg-[#ff7437]/80", size: "h-1 w-1", delay: 0.08 },
  { className: "left-[2.7%] bottom-[25%]", color: "bg-[#ff6e30]/82", size: "h-1.5 w-1.5", delay: 0.72 },
  { className: "right-[1.7%] top-[55%]", color: "bg-[#ff9147]/80", size: "h-1 w-1", delay: 0.34 },
  { className: "right-[3.8%] bottom-[22%]", color: "bg-[#ff6d2f]/86", size: "h-1.5 w-1.5", delay: 1.02 },
];

const meaningItems = [
  {
    number: "01",
    title: "Thể hiện trình độ\nphát triển xã hội",
    icon: ProgressIcon,
    tone: {
      text: "text-[#64b4ff]",
      border: "border-[#78bbff]/82",
      ring: "border-[#77baff]/78",
      glow: "rgba(76,166,255,0.95)",
      card: "bg-[linear-gradient(180deg,rgba(11,36,71,0.68)_0%,rgba(8,24,55,0.8)_55%,rgba(5,15,38,0.82)_100%)]",
      fill: "rgba(59,146,255,0.16)",
    },
  },
  {
    number: "02",
    title: "Bảo đảm quyền\nlàm chủ của nhân dân",
    icon: PeopleShieldIcon,
    tone: {
      text: "text-[#ff7043]",
      border: "border-[#ff7e3b]/82",
      ring: "border-[#ff7d3a]/78",
      glow: "rgba(255,111,43,0.95)",
      card: "bg-[linear-gradient(180deg,rgba(69,31,33,0.7)_0%,rgba(45,23,42,0.82)_55%,rgba(25,19,41,0.84)_100%)]",
      fill: "rgba(255,94,34,0.14)",
    },
  },
  {
    number: "03",
    title: "Phát huy trí tuệ và\ntrách nhiệm xã hội",
    icon: IdeaHandsIcon,
    tone: {
      text: "text-[#b368ff]",
      border: "border-[#bd78ff]/82",
      ring: "border-[#b86cff]/78",
      glow: "rgba(203,84,255,0.95)",
      card: "bg-[linear-gradient(180deg,rgba(45,28,74,0.72)_0%,rgba(34,24,63,0.82)_55%,rgba(20,18,49,0.84)_100%)]",
      fill: "rgba(178,73,255,0.15)",
    },
  },
  {
    number: "04",
    title: "Góp phần xây dựng\nxã hội công bằng,\nvăn minh",
    icon: BalanceScaleIcon,
    tone: {
      text: "text-[#ffae3b]",
      border: "border-[#ffa83f]/82",
      ring: "border-[#ffa237]/78",
      glow: "rgba(255,157,37,0.95)",
      card: "bg-[linear-gradient(180deg,rgba(66,42,36,0.7)_0%,rgba(41,31,47,0.82)_55%,rgba(23,23,43,0.84)_100%)]",
      fill: "rgba(255,158,39,0.15)",
    },
  },
];

function ProgressIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 150 150" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 110H114" strokeWidth="4.2" />
        <path d="M43 110V87h14v23" strokeWidth="4.2" />
        <path d="M65 110V75h14v35" strokeWidth="4.2" />
        <path d="M87 110V61h14v49" strokeWidth="4.2" />
        <path d="M39 71 63 47l16 15 34-34" strokeWidth="4.6" />
        <path d="M93 28h20v20" strokeWidth="4.6" />
      </g>
    </svg>
  );
}

function PeopleShieldIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 150 150" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="75" cy="45" r="14" strokeWidth="4.2" />
        <path d="M51 88V75c0-14 10-24 24-24s24 10 24 24v13" strokeWidth="4.2" />
        <circle cx="45" cy="58" r="11" strokeWidth="4.2" />
        <path d="M27 88V77c0-12 7-20 18-20 6 0 11 2 15 6" strokeWidth="4.2" />
        <circle cx="105" cy="58" r="11" strokeWidth="4.2" />
        <path d="M90 63c4-4 9-6 15-6 11 0 18 8 18 20v11" strokeWidth="4.2" />
        <path d="M75 119c-19-8-29-20-29-39 12-1 21-5 29-13 8 8 17 12 29 13 0 19-10 31-29 39Z" strokeWidth="4.2" />
        <path d="m63 94 8 8 17-20" strokeWidth="4.2" />
      </g>
    </svg>
  );
}

function IdeaHandsIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 150 150" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M58 103V91c0-6-5-13-10-18-8-8-10-22-2-33 10-15 36-15 46 0 8 11 6 25-2 33-5 5-10 12-10 18v12" strokeWidth="4.2" />
        <path d="M58 104h22M62 116h14" strokeWidth="4.2" />
        <path d="M69 27V17M49 33l-7-8M89 33l7-8M38 54H27M111 54h-11" strokeWidth="3.8" />
        <path d="M42 126H25V88c0-8 11-9 13-1l7 22" strokeWidth="4.2" />
        <path d="M42 113 56 125h14" strokeWidth="4.2" />
        <path d="M108 126h17V88c0-8-11-9-13-1l-7 22" strokeWidth="4.2" />
        <path d="m108 113-14 12H80" strokeWidth="4.2" />
      </g>
    </svg>
  );
}

function BalanceScaleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 150 150" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M75 34v69" strokeWidth="4.4" />
        <path d="M54 103h42M61 114h28" strokeWidth="4.4" />
        <path d="M43 42c20-9 44-9 64 0" strokeWidth="4.2" />
        <circle cx="75" cy="41" r="6" strokeWidth="4.2" />
        <path d="M43 42 25 83h36Z" strokeWidth="4.2" />
        <path d="M125 83 107 42 89 83Z" strokeWidth="4.2" />
        <path d="M24 83c7 11 31 11 38 0" strokeWidth="4.2" />
        <path d="M88 83c7 11 31 11 38 0" strokeWidth="4.2" />
      </g>
    </svg>
  );
}

function BackgroundWaves() {
  const leftArcs = [40, 78, 116, 154, 192, 230];
  const rightArcs = [36, 74, 112, 150, 188, 226];

  return (
    <svg viewBox="0 0 1680 945" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g fill="none" strokeLinecap="round">
        {leftArcs.map((offset, index) => (
          <path
            key={`left-${offset}`}
            d={`M${-180 + offset} -60C-72 ${160 + offset} -74 ${360 + offset} 64 ${572 + offset}`}
            stroke="#ff7036"
            strokeWidth={index === 0 ? 1.7 : 1.1}
            opacity={0.27 - index * 0.025}
          />
        ))}

        {rightArcs.map((offset, index) => (
          <path
            key={`right-${offset}`}
            d={`M${1880 - offset} -70C1760 ${160 + offset} 1760 ${360 + offset} 1612 ${578 + offset}`}
            stroke="#ff7036"
            strokeWidth={index === 0 ? 1.7 : 1.1}
            opacity={0.25 - index * 0.023}
          />
        ))}

        <path d="M-20 884C154 838 280 898 440 886C620 872 710 820 878 830C1046 840 1164 906 1340 884C1502 864 1600 826 1710 846" stroke="#ff7036" strokeWidth="2" opacity="0.22" />
        <path d="M-12 924C168 872 314 930 492 912C670 894 760 850 930 862C1100 874 1228 936 1400 910C1548 888 1626 858 1704 870" stroke="#b8322b" strokeWidth="1.4" opacity="0.2" />
        <path d="M960 892C1086 846 1200 908 1350 892C1500 876 1584 830 1700 842" stroke="#ff9a3d" strokeWidth="1.8" opacity="0.22" />
      </g>
    </svg>
  );
}

function TitleDivider({ isPresent }) {
  return (
    <Motion.div
      variants={dividerVariants}
      className="mx-auto mt-[clamp(1.1rem,3vh,2rem)] flex w-full max-w-[780px] origin-center items-center gap-5 sm:gap-7"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#864c34]/70 to-[#ffe08f]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.68, 1, 0.68], scale: [0.9, 1.14, 0.9], rotate: [0, 45, 0] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.9, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffce73] drop-shadow-[0_0_22px_rgba(255,126,46,0.92)]"
      >
        <Star className="h-8 w-8 fill-current sm:h-9 sm:w-9" strokeWidth={1.65} />
      </Motion.span>

      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#864c34]/70 to-[#ffe08f]" />
    </Motion.div>
  );
}

function CardGlow({ color }) {
  return (
    <>
      <span
        className="absolute bottom-0 left-1/2 h-[2px] w-[44%] -translate-x-1/2 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 26px ${color}, 0 0 48px ${color}`,
        }}
      />
      <span
        className="absolute left-1/2 top-[46%] h-[3px] w-20 -translate-x-1/2 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 18px ${color}`,
        }}
      />
    </>
  );
}

function MeaningCard({ item, index, isPresent }) {
  const Icon = item.icon;

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className={`relative min-h-[250px] overflow-hidden rounded-[1.45rem] border ${item.tone.border} ${item.tone.card} shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-[2px] sm:min-h-[300px] sm:rounded-[1.7rem] lg:h-[clamp(28rem,56vh,32.5rem)] lg:min-h-0`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 4%, ${item.tone.fill}, transparent 26%), radial-gradient(circle at 50% 94%, ${item.tone.fill}, transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))`,
        }}
      />
      <CardGlow color={item.tone.glow} />

      <div className="relative z-10 flex h-full flex-col items-center px-4 py-7 text-center sm:px-6 sm:py-8 lg:px-7 lg:py-9">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -4, 0],
                  boxShadow: [
                    `0 0 0 ${item.tone.glow.replace("0.95", "0.08")}`,
                    `0 0 34px ${item.tone.glow.replace("0.95", "0.22")}`,
                    `0 0 0 ${item.tone.glow.replace("0.95", "0.08")}`,
                  ],
                }
              : { opacity: 0, scale: 0.9 }
          }
          transition={
            isPresent
              ? { duration: 3.5 + index * 0.24, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full border ${item.tone.ring} ${item.tone.text} sm:h-32 sm:w-32 lg:h-[10.9rem] lg:w-[10.9rem]`}
        >
          <Icon className="h-[4rem] w-[4rem] sm:h-[5.6rem] sm:w-[5.6rem] lg:h-[7.3rem] lg:w-[7.3rem]" />
        </Motion.div>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-end pt-8 sm:pt-10 lg:pt-12">
          <Motion.div
            animate={
              isPresent
                ? { opacity: [0.78, 1, 0.78], scale: [0.98, 1.04, 0.98] }
                : { opacity: 0, scale: 0.9 }
            }
            transition={
              isPresent
                ? { duration: 2.9, delay: index * 0.13, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.18 }
            }
            className={`text-[2.6rem] font-extrabold leading-none tracking-[-0.05em] ${item.tone.text} drop-shadow-[0_9px_24px_rgba(0,0,0,0.34)] sm:text-[3.3rem] lg:text-[4.25rem]`}
          >
            {item.number}
          </Motion.div>

          <h3 className="mt-3 flex min-h-[4.2rem] w-full items-start justify-center whitespace-pre-line text-center text-[1.05rem] font-semibold leading-[1.32] text-[#fff2df] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:mt-4 sm:min-h-[5.4rem] sm:text-[1.35rem] md:min-h-[6rem] md:text-[1.5rem] lg:min-h-[7.8rem] lg:text-[clamp(1.28rem,1.62vw,1.95rem)]">
            {item.title}
          </h3>
        </div>
      </div>
    </Motion.article>
  );
}

export default function DemocracyMeaningSlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden bg-[#060b20] text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(122,33,36,0.42),transparent_34%),radial-gradient(circle_at_50%_96%,rgba(176,54,34,0.26),transparent_28%),linear-gradient(135deg,#07122e_0%,#151024_42%,#07142f_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_64%,rgba(46,115,255,0.08),transparent_26%),radial-gradient(circle_at_90%_60%,rgba(255,99,40,0.1),transparent_26%),linear-gradient(90deg,rgba(8,18,47,0.56),rgba(24,13,30,0.2)_50%,rgba(8,18,47,0.56))]" />
      <BackgroundWaves />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.22, 1, 0.22],
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 py-5 sm:px-7 sm:py-7 lg:px-10">
        <div className="flex flex-col items-center pt-[clamp(1.35rem,8vh,5.6rem)]">
          <Motion.div variants={titleVariants} className="w-full">
            <h1
              className="mx-auto bg-[linear-gradient(180deg,#fff5c9_0%,#ffe19b_24%,#ffbd58_60%,#de7923_100%)] bg-clip-text px-1 text-center text-[clamp(3rem,7.25vw,7rem)] font-bold leading-[0.9] tracking-[-0.045em] text-transparent drop-shadow-[0_12px_30px_rgba(255,125,44,0.16)]"
              style={displaySerifStyle}
            >
              Ý nghĩa của dân chủ
            </h1>
          </Motion.div>

          <TitleDivider isPresent={isPresent} />
        </div>

        <div className="mt-[clamp(1.8rem,6.2vh,4.7rem)] grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 xl:gap-8">
          {meaningItems.map((item, index) => (
            <MeaningCard key={item.number} item={item} index={index} isPresent={isPresent} />
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

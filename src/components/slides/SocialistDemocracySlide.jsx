import { motion as Motion, useIsPresent } from "framer-motion";
import {
  Building2,
  ChartColumnIncreasing,
  Heart,
  HardHat,
  Shield,
  Users,
} from "lucide-react";
import openingBase from "../../assets/slide-opening-base.svg";

const displaySerifStyle = {
  fontFamily: "'Playfair Display', 'Georgia', serif",
  fontFeatureSettings: '"liga" 0, "clig" 0',
  fontKerning: "normal",
};

const shellVariants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
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
  hidden: { opacity: 0, y: 24, scale: 0.985 },
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

const titleVariants = {
  hidden: { opacity: 0, y: -28, scale: 0.98, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: "blur(8px)",
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const nodeVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? -64 : 64,
    y: 18,
    scale: 0.97,
    filter: "blur(8px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (side) => ({
    opacity: 0,
    x: side === "left" ? -38 : 38,
    y: 14,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const coreVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 14,
    filter: "blur(8px)",
    transition: { duration: 0.26, ease: [0.4, 0, 1, 1] },
  },
};

const lineVariants = {
  hidden: { opacity: 0, scaleX: 0.6, filter: "blur(4px)" },
  show: {
    opacity: 1,
    scaleX: 1,
    filter: "blur(0px)",
    transition: { duration: 0.58, delay: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scaleX: 0.7,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const nodeItems = [
  {
    title: "Cao hơn\nvề chất",
    icon: ChartColumnIncreasing,
    side: "left",
    position: "top",
    tone: "warm",
  },
  {
    title: "Phục vụ\nđại đa số\nnhân dân",
    icon: HeartUsers,
    side: "left",
    position: "bottom",
    tone: "warm",
  },
  {
    title: "Bản chất\ngiai cấp\ncông nhân",
    icon: RaisedFist,
    side: "right",
    position: "top",
    tone: "cool",
  },
  {
    title: "Gắn với\nnhà nước pháp quyền\nxã hội chủ nghĩa",
    icon: Building2,
    side: "right",
    position: "bottom",
    tone: "cool",
  },
];

const ambientDots = [
  { className: "left-[2.5%] top-[18%]", color: "bg-[#ff7d46]/80", size: "h-1 w-1", delay: 0.16 },
  { className: "left-[6%] bottom-[22%]", color: "bg-[#ff6327]/78", size: "h-1 w-1", delay: 0.84 },
  { className: "right-[7%] top-[16%]", color: "bg-[#4c79ff]/76", size: "h-1 w-1", delay: 0.36 },
  { className: "right-[8.5%] bottom-[12%]", color: "bg-[#3f71ff]/76", size: "h-1.5 w-1.5", delay: 1.04 },
];

function HeartUsers({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Heart className="absolute left-1/2 top-[-28%] h-[32%] w-[32%] -translate-x-1/2" strokeWidth={1.9} />
      <Users className="h-full w-full" strokeWidth={1.65} />
    </div>
  );
}

function RaisedFist({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path
          d="M21 59V36c0-2 1.6-3.6 3.6-3.6S28.2 34 28.2 36v8.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.2 28.8v12.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M35 27.2v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M41.7 29.4v11.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M48.4 33.5v9.6c0 8.8-6.2 15.9-13.9 15.9H21"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.1 32.3 21 26.2c-1.2-2.4-.3-5.2 2-6.4s5.1-.3 6.3 2.1l2.1 4.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.2 28.8v-7.2c0-2.2 1.8-4 4-4s4 1.8 4 4v5.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 27.2v-6.5c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v8.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.7 29.4v-4.3c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v8.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function TitleAccent({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
      <span className="h-px w-[18%] max-w-[280px] bg-gradient-to-r from-transparent via-[#d8a25b] to-[#d8a25b]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.66, 1, 0.66], scale: [0.92, 1.08, 0.92] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#f2be63]"
      >
        <Shield className="h-5 w-5 rotate-45 fill-current" strokeWidth={1.6} />
      </Motion.span>

      <span className="h-px w-[18%] max-w-[280px] bg-gradient-to-l from-transparent via-[#d8a25b] to-[#d8a25b]" />
    </Motion.div>
  );
}

function InfoNode({ item, isPresent }) {
  const Icon = item.icon;
  const sideTone =
    item.tone === "cool"
      ? "border-[#c99755]/48 bg-[linear-gradient(180deg,rgba(10,26,66,0.62),rgba(10,16,42,0.4))]"
      : "border-[#dc7348]/54 bg-[linear-gradient(180deg,rgba(79,16,20,0.66),rgba(39,11,19,0.42))]";

  const glowTone =
    item.tone === "cool"
      ? "bg-[radial-gradient(circle_at_right,rgba(64,119,255,0.12),transparent_38%)]"
      : "bg-[radial-gradient(circle_at_left,rgba(255,91,32,0.14),transparent_36%)]";

  return (
    <Motion.article
      custom={item.side}
      variants={nodeVariants}
      className={`relative overflow-hidden rounded-[2rem] border ${sideTone} px-6 py-5 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-sm`}
    >
      <div className={`pointer-events-none absolute inset-0 ${glowTone}`} />
      <div className="pointer-events-none absolute inset-x-[10%] top-8 h-px bg-gradient-to-r from-transparent via-[#f0bb67]/16 to-transparent" />

      <div className="relative z-10 flex min-h-[160px] items-center gap-6">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 0 0 rgba(255,190,100,0.08)",
                    "0 0 24px rgba(255,190,100,0.16)",
                    "0 0 0 rgba(255,190,100,0.08)",
                  ],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={
            isPresent
              ? { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#dca45b]/78 text-[#f3c56d]"
        >
          <Icon className="h-[3.3rem] w-[3.3rem]" />
        </Motion.div>

        <h3
          className="whitespace-pre-line text-[1.64rem] leading-[1.16] text-[#f7dfaf] xl:text-[1.9rem]"
          style={displaySerifStyle}
        >
          {item.title}
        </h3>
      </div>
    </Motion.article>
  );
}

function CenterCore({ isPresent }) {
  return (
    <Motion.div variants={coreVariants} className="relative mx-auto flex h-[350px] w-[350px] items-center justify-center xl:h-[390px] xl:w-[390px]">
      <div className="absolute inset-[-8%] rounded-full border border-[#dca25a]/36 border-dashed" />

      <Motion.div
        animate={
          isPresent
            ? {
                boxShadow: [
                  "0 0 0 rgba(255,103,36,0.12)",
                  "0 0 54px rgba(255,103,36,0.22)",
                  "0 0 0 rgba(255,103,36,0.12)",
                ],
                scale: [1, 1.02, 1],
              }
            : { opacity: 0, scale: 0.94 }
        }
        transition={
          isPresent
            ? { duration: 4.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute inset-0 rounded-full border border-[#f0bb6b]/78 bg-[radial-gradient(circle_at_40%_32%,rgba(146,24,24,0.44),rgba(26,12,26,0.94)_72%)]"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#f7d37d]">
        <div className="relative flex items-center justify-center text-[#efb86a]">
          <Users className="h-24 w-24 xl:h-28 xl:w-28" strokeWidth={1.35} />
          <HardHat className="absolute left-1/2 top-[18%] h-10 w-10 -translate-x-1/2 xl:h-12 xl:w-12" strokeWidth={1.8} />
        </div>

        <h2
          className="mt-4 text-[clamp(3rem,4.8vw,4.9rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#f7d37d]"
          style={displaySerifStyle}
        >
          Nhân dân
          <br />
          lao động
        </h2>
      </div>
    </Motion.div>
  );
}

function DesktopConnectors({ isPresent }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <Motion.div
        variants={lineVariants}
        className="absolute left-[32.2%] top-[30.2%] h-px w-[11.6%] origin-left bg-gradient-to-r from-[#e9b562] via-[#ffd287] to-[#ffad57]"
        style={{ rotate: "28deg" }}
      />
      <Motion.div
        variants={lineVariants}
        className="absolute left-[31.8%] top-[66.8%] h-px w-[12.2%] origin-left bg-gradient-to-r from-[#e9b562] via-[#ffd287] to-[#ffad57]"
        style={{ rotate: "-28deg" }}
      />
      <Motion.div
        variants={lineVariants}
        className="absolute right-[31.9%] top-[30.2%] h-px w-[12%] origin-right bg-gradient-to-l from-[#e9b562] via-[#ffd287] to-[#ffad57]"
        style={{ rotate: "-28deg" }}
      />
      <Motion.div
        variants={lineVariants}
        className="absolute right-[31.6%] top-[66.8%] h-px w-[12.2%] origin-right bg-gradient-to-l from-[#e9b562] via-[#ffd287] to-[#ffad57]"
        style={{ rotate: "28deg" }}
      />

      {[
        "left-[31.2%] top-[25.6%]",
        "left-[39.2%] top-[35.2%]",
        "left-[31.1%] top-[74.1%]",
        "left-[39.1%] top-[65.3%]",
        "right-[31.1%] top-[25.6%]",
        "right-[39.1%] top-[35.2%]",
        "right-[31%] top-[74.1%]",
        "right-[39%] top-[65.3%]",
      ].map((className, index) => (
        <Motion.span
          key={className}
          animate={
            isPresent
              ? {
                  opacity: [0.52, 1, 0.52],
                  scale: [0.92, 1.2, 0.92],
                }
              : { opacity: 0 }
          }
          transition={
            isPresent
              ? { duration: 2.4, delay: index * 0.08, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`absolute ${className} h-3.5 w-3.5 rounded-full bg-[#ffbf66] shadow-[0_0_18px_rgba(255,191,102,0.9)]`}
        />
      ))}
    </div>
  );
}

export default function SocialistDemocracySlide() {
  const isPresent = useIsPresent();
  const leftNodes = nodeItems.filter((item) => item.side === "left");
  const rightNodes = nodeItems.filter((item) => item.side === "right");

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <img
        src={openingBase}
        alt="Slide dân chủ xã hội chủ nghĩa"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_54%,rgba(255,88,26,0.18),transparent_26%),radial-gradient(circle_at_88%_54%,rgba(35,97,221,0.16),transparent_24%),linear-gradient(180deg,rgba(5,7,20,0.08),rgba(5,7,20,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[38%] bg-[linear-gradient(90deg,rgba(62,10,10,0.22),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[36%] bg-[linear-gradient(270deg,rgba(8,25,70,0.2),transparent)]" />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.28, 1, 0.28],
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

      <Motion.div
        variants={shellVariants}
        className="relative z-10 mx-auto flex h-full w-full max-w-[1580px] flex-col px-6 py-7 sm:px-8 lg:px-10"
      >
        <Motion.div variants={titleVariants} className="pt-2">
          <h1
            className="text-center text-[clamp(3.4rem,6vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#f7d37d] drop-shadow-[0_14px_28px_rgba(42,7,11,0.32)]"
            style={displaySerifStyle}
          >
            Dân chủ xã hội chủ nghĩa
          </h1>
        </Motion.div>

        <TitleAccent isPresent={isPresent} />

        <div className="relative mt-8 flex min-h-0 flex-1 items-center sm:mt-10">
          <DesktopConnectors isPresent={isPresent} />

          <div className="grid w-full min-h-0 gap-6 lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)] lg:grid-rows-[1fr_1fr] lg:items-center lg:gap-x-7 lg:gap-y-5 xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]">
            <div className="grid gap-5 self-end lg:row-span-2 lg:grid-rows-2">
              {leftNodes.map((item) => (
                <InfoNode key={item.title} item={item} isPresent={isPresent} />
              ))}
            </div>

            <div className="order-first lg:order-none lg:row-span-2">
              <CenterCore isPresent={isPresent} />
            </div>

            <div className="grid gap-5 self-end lg:row-span-2 lg:grid-rows-2">
              {rightNodes.map((item) => (
                <InfoNode key={item.title} item={item} isPresent={isPresent} />
              ))}
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

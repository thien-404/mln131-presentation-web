import { motion as Motion, useIsPresent } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Lightbulb,
  MessageSquareText,
  Scale,
  Sparkles,
  Star,
  Shield,
  Target,
  Vote,
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
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    filter: "blur(10px)",
    transition: {
      duration: 0.34,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0.72 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.54, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scaleX: 0.78,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const panelVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? -88 : 88,
    y: 18,
    rotateY: side === "left" ? -7 : 7,
    scale: 0.96,
    filter: "blur(8px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
  exit: (side) => ({
    opacity: 0,
    x: side === "left" ? -66 : 66,
    y: 16,
    rotateY: side === "left" ? -4 : 4,
    scale: 0.95,
    filter: "blur(8px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  }),
};

const cardVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? -36 : 36,
    y: 18,
    scale: 0.97,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (side) => ({
    opacity: 0,
    x: side === "left" ? -24 : 24,
    y: 14,
    scale: 0.95,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const connectorVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, delay: 0.14, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 16,
    filter: "blur(8px)",
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const leftItems = [
  { title: "Thảo luận", icon: MessageSquareText },
  { title: "Đóng góp", icon: Lightbulb },
  { title: "Biểu quyết", icon: Vote },
];

const rightItems = [
  { title: "Thống nhất", icon: BadgeCheck },
  { title: "Kỷ luật", icon: Shield },
  { title: "Hành động nhất quán", icon: Target },
];

const ambientDots = [
  { className: "left-[2.8%] top-[18%]", size: "h-1 w-1", color: "bg-[#ff7e43]/75" },
  { className: "left-[4.2%] top-[22%]", size: "h-1.5 w-1.5", color: "bg-[#ff8f59]/85" },
  { className: "left-[6%] bottom-[14%]", size: "h-1 w-1", color: "bg-[#fb6a2f]/70" },
  { className: "right-[6%] top-[16%]", size: "h-1 w-1", color: "bg-[#638cff]/70" },
  { className: "right-[4%] top-[24%]", size: "h-1.5 w-1.5", color: "bg-[#8ba7ff]/80" },
  { className: "right-[7%] bottom-[18%]", size: "h-1 w-1", color: "bg-[#4f76ff]/75" },
];

function TitleAccent({ isPresent }) {
  return (
    <Motion.div variants={dividerVariants} className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
      <span className="h-px w-[18%] max-w-[340px] bg-gradient-to-r from-transparent via-[#efb768] to-[#efb768]" />

      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.58, 1, 0.58],
                scale: [0.94, 1.08, 0.94],
              }
            : { opacity: 0, scale: 0.8 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="flex items-center justify-center text-[#efb768]"
      >
        <Sparkles className="h-5 w-5" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-[18%] max-w-[340px] bg-gradient-to-l from-transparent via-[#efb768] to-[#efb768]" />
    </Motion.div>
  );
}

function SectionAccent({ isPresent }) {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#ef8752] to-[#ef8752]" />

      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.66, 1, 0.66],
                scale: [0.96, 1.08, 0.96],
              }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ef8752]"
      >
        <Star className="h-5 w-5 fill-current" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-16 bg-gradient-to-l from-transparent via-[#ef8752] to-[#ef8752]" />
    </div>
  );
}

function PillarCard({ title, icon: Icon, side, index, isPresent }) {
  const iconLoop =
    isPresent && index % 2 === 0
      ? {
          y: [0, -3, 0],
          boxShadow: [
            "0 0 0 rgba(240,145,82,0.08)",
            "0 0 28px rgba(240,145,82,0.18)",
            "0 0 0 rgba(240,145,82,0.08)",
          ],
        }
      : isPresent
        ? {
            y: [0, -2, 0],
            boxShadow: [
              "0 0 0 rgba(240,145,82,0.08)",
              "0 0 20px rgba(240,145,82,0.14)",
              "0 0 0 rgba(240,145,82,0.08)",
            ],
          }
        : {
            opacity: 0,
            scale: 0.94,
          };

  return (
    <Motion.article
      custom={side}
      variants={cardVariants}
      className="relative overflow-hidden rounded-[1.8rem] border border-[#d79d54]/28 bg-[linear-gradient(180deg,rgba(18,16,32,0.38),rgba(11,10,25,0.52))] px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.2)] backdrop-blur-sm"
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          side === "left"
            ? "bg-[radial-gradient(circle_at_left_top,rgba(255,106,46,0.14),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_left_top,rgba(74,121,255,0.14),transparent_36%)]"
        }`}
      />

      <div className="relative z-10 flex min-h-[112px] items-center gap-4 xl:min-h-[120px]">
        <Motion.div
          animate={iconLoop}
          transition={
            isPresent
              ? { duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-[#d5864e]/55 text-[#f09152] shadow-[0_0_18px_rgba(240,145,82,0.12)] sm:h-20 sm:w-20 xl:h-22 xl:w-22"
        >
          <Icon className="h-9 w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11" strokeWidth={1.45} />
        </Motion.div>

        <h3 className="text-[1.28rem] leading-[1.12] text-[#f7ddb0] sm:text-[1.45rem] xl:text-[1.68rem]">
          {title}
        </h3>
      </div>
    </Motion.article>
  );
}

function PillarPanel({ title, items, side, isPresent }) {
  const panelTone =
    side === "left"
      ? "bg-[linear-gradient(180deg,rgba(76,18,22,0.64),rgba(36,10,20,0.42))]"
      : "bg-[linear-gradient(180deg,rgba(13,29,72,0.52),rgba(10,17,46,0.38))]";

  return (
    <Motion.section
      custom={side}
      variants={panelVariants}
      className={`relative flex h-full min-h-[446px] flex-col overflow-hidden rounded-[2.35rem] border ${side === "left" ? "border-[#e77044]/55" : "border-[#c99755]/42"} ${panelTone} px-6 pb-6 pt-6 shadow-[0_22px_48px_rgba(0,0,0,0.24)]`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          side === "left"
            ? "bg-[radial-gradient(circle_at_left_top,rgba(255,103,46,0.16),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_right_top,rgba(58,111,255,0.12),transparent_38%)]"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 opacity-80 ${
          side === "left"
            ? "bg-[linear-gradient(135deg,rgba(255,115,52,0.08),transparent_30%,transparent_70%,rgba(255,124,60,0.06))]"
            : "bg-[linear-gradient(135deg,rgba(87,132,255,0.06),transparent_34%,transparent_70%,rgba(255,183,99,0.05))]"
        }`}
      />

      <Motion.span
        animate={isPresent ? { opacity: [0.4, 1, 0.4], scaleX: [0.85, 1.08, 0.85] } : { opacity: 0 }}
        transition={
          isPresent
            ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff9c57] to-transparent"
      />

      <div className="relative z-10 flex h-full flex-col">
        <Motion.h2
          variants={titleVariants}
          className="text-center text-[clamp(3rem,4.2vw,4.5rem)] font-bold leading-none tracking-[-0.03em] text-[#f7d37d]"
          style={displaySerifStyle}
        >
          {title}
        </Motion.h2>

        <SectionAccent isPresent={isPresent} />

        <div className="mt-5 grid flex-1 auto-rows-fr gap-4">
          {items.map((item, index) => (
            <PillarCard
              key={item.title}
              {...item}
              index={index}
              side={side}
              isPresent={isPresent}
            />
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

function CenterConnector({ isPresent }) {
  return (
    <Motion.div
      variants={connectorVariants}
      className="relative mx-auto flex h-[210px] w-[210px] items-center justify-center sm:h-[230px] sm:w-[230px] xl:h-[250px] xl:w-[250px]"
    >
      <div className="absolute inset-[-24%] rounded-full border border-[#d9a056]/10" />
      <div className="absolute inset-[-8%] rounded-full border border-[#d9a056]/16 border-dashed" />

      <Motion.div
        animate={
          isPresent
            ? {
                boxShadow: [
                  "0 0 0 rgba(255,126,53,0.12)",
                  "0 0 46px rgba(255,126,53,0.24)",
                  "0 0 0 rgba(255,126,53,0.12)",
                ],
                scale: [1, 1.025, 1],
              }
            : { opacity: 0, scale: 0.9 }
        }
        transition={
          isPresent
            ? { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute inset-0 rounded-full border border-[#ef8c52]/70 bg-[radial-gradient(circle_at_50%_36%,rgba(120,26,20,0.38),rgba(22,12,28,0.88)_72%)]"
      />

      <Motion.div
        animate={isPresent ? { x: [0, -9, 0] } : { opacity: 0, x: -8 }}
        transition={
          isPresent
            ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute left-[-22%] top-1/2 -translate-y-1/2 text-[#ff7f45]"
      >
        <ArrowLeft className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2.6} />
      </Motion.div>

      <Motion.div
        animate={isPresent ? { x: [0, 9, 0] } : { opacity: 0, x: 8 }}
        transition={
          isPresent
            ? { duration: 2.2, delay: 0.12, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute right-[-22%] top-1/2 -translate-y-1/2 text-[#ff7f45]"
      >
        <ArrowRight className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2.6} />
      </Motion.div>

      <div className="relative z-10 flex items-center justify-center text-[#f7d37d]">
        <Scale className="h-18 w-18 sm:h-20 sm:w-20 xl:h-24 xl:w-24" strokeWidth={1.35} />
      </div>
    </Motion.div>
  );
}

export default function CentralizedDemocracySlide() {
  const isPresent = useIsPresent();

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
        alt="Slide nguyên tắc tập trung dân chủ"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_34%,rgba(255,92,27,0.17),transparent_24%),radial-gradient(circle_at_88%_48%,rgba(28,95,214,0.16),transparent_22%),linear-gradient(180deg,rgba(4,7,20,0.08),rgba(4,7,20,0.2))]" />
      <div className="absolute inset-y-[2%] right-[-8%] hidden w-[34%] rounded-full border border-[#d59a52]/12 lg:block" />
      <div className="absolute inset-y-[6%] right-[-2%] hidden w-[28%] rounded-full border border-[#d59a52]/8 lg:block" />
      <div className="absolute inset-y-[10%] right-[4%] hidden w-[22%] rounded-full border border-[#d59a52]/8 lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[radial-gradient(circle_at_left_bottom,rgba(255,74,12,0.16),transparent_42%),radial-gradient(circle_at_right_bottom,rgba(43,96,216,0.18),transparent_38%)]" />

      <div className="pointer-events-none absolute bottom-[-9%] left-[-9%] h-[42%] w-[34%] rounded-full border border-[#ff6d31]/16" />
      <div className="pointer-events-none absolute bottom-[-4%] left-[-3%] h-[31%] w-[28%] rounded-full border border-[#ff6d31]/12" />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.25, 1, 0.25],
                  scale: [0.85, 1.18, 0.85],
                }
              : { opacity: 0 }
          }
          transition={
            isPresent
              ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className={`absolute ${dot.className} ${dot.size} ${dot.color} rounded-full shadow-[0_0_12px_currentColor]`}
        />
      ))}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1540px] flex-col px-5 py-6 sm:px-8 sm:py-7 lg:px-10 xl:px-12">
        <div className="flex min-h-0 flex-1 flex-col">
          <Motion.div variants={titleVariants} className="pt-2">
            <h1
              className="mx-auto max-w-[1380px] text-center text-[clamp(3rem,5.15vw,5.7rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#f7d37d] drop-shadow-[0_12px_24px_rgba(42,7,11,0.32)]"
              style={displaySerifStyle}
            >
              Nguyên tắc tập trung dân chủ
            </h1>
          </Motion.div>

          <TitleAccent isPresent={isPresent} />

          <div className="relative mt-8 flex min-h-0 flex-1 items-stretch sm:mt-9">
            <div className="grid w-full min-h-0 gap-5 lg:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,1fr)_250px_minmax(0,1fr)] xl:gap-7">
              <PillarPanel title="Dân chủ" items={leftItems} side="left" isPresent={isPresent} />

              <div className="order-first flex items-center justify-center lg:order-none">
                <CenterConnector isPresent={isPresent} />
              </div>

              <PillarPanel title="Tập trung" items={rightItems} side="right" isPresent={isPresent} />
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

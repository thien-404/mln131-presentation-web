import { motion as Motion, useIsPresent } from "framer-motion";
import {
  Flame,
  House,
  MessageSquareText,
  Sparkles,
  UsersRound,
} from "lucide-react";
import cavemanImage from "../../background/caveman.png";
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
  hidden: { opacity: 0, y: -28, scale: 0.985, filter: "blur(8px)" },
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

const panelVariants = {
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
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (side) => ({
    opacity: 0,
    x: side === "left" ? -38 : 38,
    y: 16,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const cardVariants = {
  hidden: () => ({
    opacity: 0,
    x: 36,
    y: 18,
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
      duration: 0.58,
      delay: 0.14 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    x: 24,
    y: 14,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const insightItems = [
  {
    title: "Chưa có nhà nước và\ngiai cấp rõ rệt",
    icon: HouseOffIcon,
  },
  {
    title: "Cộng đồng bàn bạc\ncông việc chung",
    icon: CommunityDiscussIcon,
  },
  {
    title: "Mọi thành viên\ntương đối bình đẳng",
    icon: EqualityCommunityIcon,
  },
  {
    title: "Hình thức dân chủ sơ khai",
    icon: Flame,
  },
];

const ambientDots = [
  { className: "left-[3%] top-[20%]", size: "h-1 w-1", color: "bg-[#ff7642]/80", delay: 0.12 },
  { className: "left-[6.5%] bottom-[16%]", size: "h-1.5 w-1.5", color: "bg-[#ff5b24]/76", delay: 0.82 },
  { className: "right-[10%] top-[18%]", size: "h-1 w-1", color: "bg-[#4a76ff]/74", delay: 0.34 },
  { className: "right-[8%] bottom-[12%]", size: "h-1 w-1", color: "bg-[#3b6dff]/76", delay: 1.02 },
];

function HouseOffIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <House className="h-full w-full" strokeWidth={1.55} />
      <span className="absolute left-[18%] top-[18%] h-[6%] w-[64%] rotate-45 rounded-full bg-current" />
    </div>
  );
}

function CommunityDiscussIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <UsersRound className="absolute inset-x-[12%] bottom-0 h-[52%] w-[76%]" strokeWidth={1.55} />
      <MessageSquareText className="absolute left-1/2 top-[6%] h-[46%] w-[46%] -translate-x-1/2" strokeWidth={1.55} />
    </div>
  );
}

function EqualityCommunityIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <UsersRound className="absolute inset-x-[12%] bottom-0 h-[52%] w-[76%]" strokeWidth={1.55} />
      <div className="absolute left-1/2 top-[12%] flex w-[34%] -translate-x-1/2 flex-col gap-2">
        <span className="h-[0.34rem] w-full rounded-full bg-current" />
        <span className="h-[0.34rem] w-full rounded-full bg-current" />
      </div>
    </div>
  );
}

function TitleAccent({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="mt-4 flex items-center justify-center gap-4 sm:mt-5">
      <span className="h-px w-[20%] max-w-[340px] bg-gradient-to-r from-transparent via-[#d89d55] to-[#d89d55]" />

      <Motion.span
        animate={
          isPresent
            ? { opacity: [0.64, 1, 0.64], scale: [0.92, 1.08, 0.92] }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffbc62]"
      >
        <Sparkles className="h-5 w-5" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-[20%] max-w-[340px] bg-gradient-to-l from-transparent via-[#d89d55] to-[#d89d55]" />
    </Motion.div>
  );
}

function SceneIllustration({ isPresent }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] border border-[#d98e49]/52 bg-[linear-gradient(180deg,rgba(28,12,20,0.7),rgba(14,12,24,0.48))] shadow-[0_22px_52px_rgba(0,0,0,0.24)]">
      <Motion.img
        src={cavemanImage}
        alt="Cảnh cộng đồng nguyên thủy quây quần bên đống lửa"
        animate={
          isPresent
            ? {
                scale: [1, 1.018, 1],
                opacity: [0.94, 1, 0.96],
              }
            : { opacity: 0, scale: 0.96 }
        }
        transition={
          isPresent
            ? { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="absolute inset-[3%] h-[94%] w-[94%] rounded-[1.7rem] object-contain shadow-[0_0_28px_rgba(255,123,43,0.12)]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(255,84,24,0.1),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
    </div>
  );
}

function InsightCard({ item, index, isPresent }) {
  const Icon = item.icon;

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className="relative overflow-hidden rounded-[1.75rem] border border-[#ca9756]/44 bg-[linear-gradient(180deg,rgba(12,26,64,0.62),rgba(9,16,40,0.4))] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(63,112,255,0.12),transparent_38%),radial-gradient(circle_at_left,rgba(255,90,34,0.08),transparent_28%)]" />
      <div className="relative z-10 flex min-h-[112px] items-center gap-4 xl:min-h-[118px]">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 0 0 rgba(255,190,102,0.08)",
                    "0 0 24px rgba(255,190,102,0.16)",
                    "0 0 0 rgba(255,190,102,0.08)",
                  ],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={
            isPresent
              ? { duration: 3.6 + index * 0.18, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex h-[5.4rem] w-[5.4rem] shrink-0 items-center justify-center rounded-full border border-[#e38542]/72 text-[#f3c56d] xl:h-[5.8rem] xl:w-[5.8rem]"
        >
          <Icon className="h-[3.2rem] w-[3.2rem] xl:h-[3.45rem] xl:w-[3.45rem]" />
        </Motion.div>

        <h3 className="whitespace-pre-line text-[1.24rem] leading-[1.18] text-[#f7dfb3] sm:text-[1.36rem] xl:text-[1.52rem]">
          {item.title}
        </h3>
      </div>
    </Motion.article>
  );
}

export default function PrimitiveSocietyDemocracySlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <SlideBackdrop variant="primitive" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_60%,rgba(255,88,26,0.18),transparent_28%),radial-gradient(circle_at_88%_62%,rgba(38,93,220,0.16),transparent_26%),linear-gradient(180deg,rgba(5,7,20,0.06),rgba(5,7,20,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[38%] bg-[linear-gradient(90deg,rgba(62,10,10,0.22),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[36%] bg-[linear-gradient(270deg,rgba(8,24,70,0.18),transparent)]" />

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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1620px] flex-col px-6 py-7 sm:px-8 lg:px-10">
        <Motion.div variants={titleVariants} className="pt-2">
          <h1
            className="text-center text-[clamp(2.7rem,5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#f7d37d] drop-shadow-[0_14px_28px_rgba(42,7,11,0.32)]"
            style={displaySerifStyle}
          >
            Dân chủ trong xã hội nguyên thủy
          </h1>
        </Motion.div>

        <TitleAccent isPresent={isPresent} />

        <div className="mt-5 grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch xl:gap-5">
          <Motion.section custom="left" variants={panelVariants} className="flex min-h-0 lg:max-h-full">
            <SceneIllustration isPresent={isPresent} />
          </Motion.section>

          <Motion.div
            custom="right"
            variants={panelVariants}
            className="grid auto-rows-fr gap-3 lg:gap-4"
          >
            {insightItems.map((item, index) => (
              <InsightCard key={item.title} item={item} index={index} isPresent={isPresent} />
            ))}
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
}

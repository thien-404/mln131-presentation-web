import { motion as Motion, useIsPresent } from "framer-motion";
import { Gavel, Landmark, Scale, Shield, Star, UsersRound, Heart } from "lucide-react";
import openingBase from "../../assets/slide-opening-base.svg";

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
      duration: 0.32,
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
    transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
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
  hidden: { opacity: 0, scaleX: 0.72 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
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
    y: 30,
    x: index < 2 ? -24 : 24,
    scale: 0.97,
    filter: "blur(8px)",
  }),
  show: (index) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.64,
      delay: 0.08 + index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 18,
    x: index < 2 ? -18 : 18,
    scale: 0.965,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const connectorVariants = {
  hidden: { opacity: 0, scaleX: 0.6, filter: "blur(4px)" },
  show: (index) => ({
    opacity: 1,
    scaleX: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.52,
      delay: 0.22 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    scaleX: 0.72,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const cardItems = [
  {
    number: "01",
    title: "Lấy dân\nlàm gốc",
    icon: PeopleHeartIcon,
    tone: "warm",
  },
  {
    number: "02",
    title: "Quyền lực\nthuộc về nhân dân",
    icon: Landmark,
    tone: "warm",
  },
  {
    number: "03",
    title: "Dân chủ gắn với\ncông bằng xã hội",
    icon: Scale,
    tone: "neutral",
  },
  {
    number: "04",
    title: "Dân chủ được bảo đảm\nbằng pháp luật",
    icon: JusticeShieldIcon,
    tone: "cool",
  },
];

const ambientDots = [
  { className: "left-[2.6%] top-[18%]", color: "bg-[#ff7742]/80", size: "h-1 w-1", delay: 0.12 },
  { className: "left-[5.8%] bottom-[18%]", color: "bg-[#ff5b26]/75", size: "h-1.5 w-1.5", delay: 0.82 },
  { className: "right-[5.6%] top-[24%]", color: "bg-[#4d78ff]/74", size: "h-1 w-1", delay: 0.38 },
  { className: "right-[8.6%] bottom-[12%]", color: "bg-[#3a6fff]/76", size: "h-1 w-1", delay: 1.02 },
];

function PeopleHeartIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <UsersRound className="h-full w-full" strokeWidth={1.55} />
      <Heart
        className="absolute left-1/2 top-[48%] h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2"
        strokeWidth={1.8}
      />
    </div>
  );
}

function JusticeShieldIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Shield className="h-full w-full" strokeWidth={1.5} />
      <Gavel
        className="absolute left-1/2 top-[55%] h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg]"
        strokeWidth={1.8}
      />
    </div>
  );
}

function TitleAccent({ isPresent }) {
  return (
    <Motion.div variants={dividerVariants} className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
      <span className="h-px w-[20%] max-w-[320px] bg-gradient-to-r from-transparent via-[#ef7c47] to-[#ef7c47]" />

      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.62, 1, 0.62],
                scale: [0.92, 1.1, 0.92],
              }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffb85b]"
      >
        <Star className="h-6 w-6 fill-current" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-[20%] max-w-[320px] bg-gradient-to-l from-transparent via-[#ef7c47] to-[#ef7c47]" />
    </Motion.div>
  );
}

function NumberBadge({ number, isPresent }) {
  return (
    <Motion.div
      animate={
        isPresent
          ? {
              y: [0, -2, 0],
              boxShadow: [
                "0 0 0 rgba(255,140,66,0.1)",
                "0 0 22px rgba(255,140,66,0.18)",
                "0 0 0 rgba(255,140,66,0.1)",
              ],
            }
          : { opacity: 0, scale: 0.9 }
      }
      transition={
        isPresent
          ? { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.18 }
      }
      className="mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#f0bb67]/78 bg-[radial-gradient(circle_at_50%_35%,rgba(136,20,22,0.5),rgba(36,10,18,0.92)_78%)] text-[#f7d37d]"
    >
      <span
        className="text-[2.2rem] font-bold leading-none tracking-[-0.03em]"
        style={displaySerifStyle}
      >
        {number}
      </span>
    </Motion.div>
  );
}

function CardDivider({ isPresent }) {
  return (
    <div className="mt-auto flex items-center justify-center gap-3">
      <span className="h-px w-[32%] bg-gradient-to-r from-transparent via-[#ef7c47]/72 to-[#ef7c47]/28" />

      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.58, 1, 0.58],
                scale: [0.92, 1.08, 0.92],
              }
            : { opacity: 0 }
        }
        transition={
          isPresent
            ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ffb95f]"
      >
        <Star className="h-5 w-5 fill-current" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-[32%] bg-gradient-to-l from-transparent via-[#ef7c47]/72 to-[#ef7c47]/28" />
    </div>
  );
}

function AwarenessCard({ item, index, isPresent }) {
  const Icon = item.icon;
  const frameTone =
    item.tone === "cool"
      ? "border-[#c99755]/44 bg-[linear-gradient(180deg,rgba(10,26,64,0.62),rgba(9,16,40,0.42))]"
      : item.tone === "neutral"
        ? "border-[#ca9756]/48 bg-[linear-gradient(180deg,rgba(32,17,30,0.66),rgba(14,13,28,0.48))]"
        : "border-[#e16f45]/54 bg-[linear-gradient(180deg,rgba(83,16,20,0.7),rgba(39,10,18,0.44))]";

  const innerGlow =
    item.tone === "cool"
      ? "bg-[radial-gradient(circle_at_right,rgba(72,120,255,0.12),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_left,rgba(255,88,32,0.12),transparent_36%)]";

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className={`relative flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border ${frameTone} px-6 pb-8 pt-6 shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-sm`}
    >
      <div className={`pointer-events-none absolute inset-0 ${innerGlow}`} />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#f1bf69]/16 to-transparent" />

      <NumberBadge number={item.number} isPresent={isPresent} />

      <div className="mt-8 flex flex-1 flex-col items-center">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -4, 0],
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
              ? { duration: 3.8 + index * 0.18, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex h-[122px] w-[122px] items-center justify-center text-[#f3c56d]"
        >
          <Icon className="h-[5.5rem] w-[5.5rem]" />
        </Motion.div>

        <div className="mt-10 w-full">
          <CardDivider isPresent={isPresent} />
        </div>

        <div className="mt-6 flex flex-1 items-start justify-center">
          <h3 className="whitespace-pre-line text-center text-[1.16rem] font-medium leading-[1.36] text-[#f6dfb6] sm:text-[1.22rem] xl:text-[1.32rem]">
            {item.title}
          </h3>
        </div>
      </div>
    </Motion.article>
  );
}

function Connector({ index, isPresent }) {
  return (
    <Motion.div
      custom={index}
      variants={connectorVariants}
      className="hidden h-full items-center justify-center lg:flex"
    >
      <div className="relative h-px w-full bg-gradient-to-r from-[#ff7a45] via-[#ff9f5d] to-[#ff7a45]">
        <Motion.span
          animate={
            isPresent
              ? {
                  opacity: [0.6, 1, 0.6],
                  scale: [0.92, 1.18, 0.92],
                }
              : { opacity: 0 }
          }
          transition={
            isPresent
              ? { duration: 2.2, delay: index * 0.08, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9b55] shadow-[0_0_18px_rgba(255,155,85,0.92)]"
        />
      </div>
    </Motion.div>
  );
}

export default function PartyAwarenessSlide() {
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
        alt="Slide nhận thức của Đảng Cộng sản Việt Nam"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_60%,rgba(255,86,24,0.18),transparent_28%),radial-gradient(circle_at_88%_62%,rgba(38,93,220,0.16),transparent_26%),linear-gradient(180deg,rgba(5,7,20,0.06),rgba(5,7,20,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[36%] bg-[linear-gradient(90deg,rgba(62,10,10,0.2),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[34%] bg-[linear-gradient(270deg,rgba(8,24,70,0.18),transparent)]" />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.26, 1, 0.26],
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col px-6 py-7 sm:px-8 lg:px-10">
        <Motion.div variants={titleVariants} className="pt-2">
          <h1
            className="text-center text-[clamp(3rem,5.5vw,6rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#f7d37d] drop-shadow-[0_14px_28px_rgba(42,7,11,0.32)]"
            style={displaySerifStyle}
          >
            Nhận thức của Đảng Cộng sản Việt Nam
          </h1>
        </Motion.div>

        <TitleAccent isPresent={isPresent} />

        <div className="mt-8 flex min-h-0 flex-1 items-center sm:mt-10">
          <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)_72px_minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-center xl:gap-6">
            {cardItems.map((item, index) => (
              <div key={item.number} className="contents">
                <AwarenessCard item={item} index={index} isPresent={isPresent} />
                {index < cardItems.length - 1 ? <Connector index={index} isPresent={isPresent} /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

import { motion as Motion, useIsPresent } from "framer-motion";
import {
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
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
    y: 28,
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
    title: "Ra đời sau các\ncuộc cách mạng tư sản",
    icon: Landmark,
    tone: "warm",
  },
  {
    number: "02",
    title: "Đề cao tự do cá nhân\nvà quyền công dân",
    icon: CitizenShieldIcon,
    tone: "neutral",
  },
  {
    number: "03",
    title: "Tổ chức qua hiến pháp,\npháp luật, bầu cử",
    icon: ConstitutionVoteIcon,
    tone: "neutral",
  },
  {
    number: "04",
    title: "Chịu sự chi phối\ncủa giai cấp tư sản",
    icon: BallotBoxIcon,
    tone: "cool",
  },
];

const ambientDots = [
  { className: "left-[2.8%] top-[18%]", color: "bg-[#ff7843]/80", size: "h-1 w-1", delay: 0.12 },
  { className: "left-[6.2%] bottom-[18%]", color: "bg-[#ff5c26]/76", size: "h-1.5 w-1.5", delay: 0.82 },
  { className: "right-[8%] top-[24%]", color: "bg-[#4b78ff]/76", size: "h-1 w-1", delay: 0.38 },
  { className: "right-[11%] bottom-[12%]", color: "bg-[#3d71ff]/76", size: "h-1 w-1", delay: 1.02 },
];

function CitizenShieldIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <UserRound className="h-full w-full" strokeWidth={1.55} />
      <ShieldCheck
        className="absolute bottom-[2%] right-[-2%] h-[44%] w-[44%] rounded-full bg-[radial-gradient(circle,rgba(10,10,18,0.54),transparent_70%)] p-[4%]"
        strokeWidth={1.65}
      />
    </div>
  );
}

function ConstitutionVoteIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <ScrollText className="h-full w-full" strokeWidth={1.5} />
      <Scale
        className="absolute left-1/2 top-[20%] h-[42%] w-[42%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(10,10,18,0.56),transparent_72%)] p-[2%]"
        strokeWidth={1.65}
      />
    </div>
  );
}

function BallotBoxIcon({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <path
          d="M18 32h28l4 8v11H14V40l4-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M24 24h16l3 8H21l3-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M31 10h10l7 12H38l-7-12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="43.5" r="7.2" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="m28.8 43.2 2.3 2.3 4.5-4.8"
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
    <Motion.div variants={dividerVariants} className="mt-4 flex items-center justify-center gap-4 sm:mt-5">
      <span className="h-px w-[22%] max-w-[320px] bg-gradient-to-r from-transparent via-[#ef7c47] to-[#ef7c47]" />

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

      <span className="h-px w-[22%] max-w-[320px] bg-gradient-to-l from-transparent via-[#ef7c47] to-[#ef7c47]" />
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
                "0 0 24px rgba(255,140,66,0.18)",
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
      className="mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#f0bb67]/78 bg-[radial-gradient(circle_at_50%_35%,rgba(136,20,22,0.5),rgba(36,10,18,0.92)_78%)] text-[#f7d37d] shadow-[0_0_28px_rgba(255,149,72,0.18)] sm:h-[84px] sm:w-[84px]"
    >
      <span
        className="text-[2rem] font-bold leading-none tracking-[-0.03em] sm:text-[2.2rem]"
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
        <Star className="h-4 w-4 fill-current sm:h-5 sm:w-5" strokeWidth={1.8} />
      </Motion.span>

      <span className="h-px w-[32%] bg-gradient-to-l from-transparent via-[#ef7c47]/72 to-[#ef7c47]/28" />
    </div>
  );
}

function BourgeoisCard({ item, index, isPresent }) {
  const Icon = item.icon;
  const frameTone =
    item.tone === "cool"
      ? "border-[#ca9756]/44 bg-[linear-gradient(180deg,rgba(10,26,64,0.64),rgba(9,16,40,0.42))]"
      : item.tone === "neutral"
        ? "border-[#ca9756]/48 bg-[linear-gradient(180deg,rgba(28,16,28,0.7),rgba(14,13,28,0.5))]"
        : "border-[#e16f45]/56 bg-[linear-gradient(180deg,rgba(83,16,20,0.72),rgba(39,10,18,0.46))]";

  const innerGlow =
    item.tone === "cool"
      ? "bg-[radial-gradient(circle_at_right,rgba(72,120,255,0.12),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_left,rgba(255,88,32,0.12),transparent_36%)]";

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className={`relative flex min-h-[344px] flex-col overflow-hidden rounded-[2rem] border ${frameTone} px-5 pb-6 pt-5 shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:min-h-[380px] sm:px-6 sm:pb-7 sm:pt-6`}
    >
      <div className={`pointer-events-none absolute inset-0 ${innerGlow}`} />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#f1bf69]/16 to-transparent" />

      <NumberBadge number={item.number} isPresent={isPresent} />

      <div className="mt-6 flex flex-1 flex-col items-center sm:mt-8">
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
          className="flex h-[100px] w-[100px] items-center justify-center text-[#f3c56d] sm:h-[116px] sm:w-[116px]"
        >
          <Icon className="h-[4.8rem] w-[4.8rem] sm:h-[5.4rem] sm:w-[5.4rem]" />
        </Motion.div>

        <div className="mt-6 w-full sm:mt-8">
          <CardDivider isPresent={isPresent} />
        </div>

        <div className="mt-5 flex flex-1 items-start justify-center sm:mt-6">
          <h3 className="whitespace-pre-line text-center text-[clamp(1.02rem,1.18vw,1.5rem)] font-medium leading-[1.38] text-[#f6dfb6]">
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

export default function BourgeoisDemocracySlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <SlideBackdrop variant="bourgeois" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_60%,rgba(255,86,24,0.18),transparent_28%),radial-gradient(circle_at_88%_54%,rgba(38,93,220,0.16),transparent_26%),linear-gradient(180deg,rgba(5,7,20,0.06),rgba(5,7,20,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[38%] bg-[linear-gradient(90deg,rgba(62,10,10,0.2),transparent)]" />
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1660px] flex-col px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex h-full flex-col overflow-hidden rounded-[2.2rem] border border-[#c7934b]/62 px-4 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:px-6 sm:py-6 lg:px-8">
          <Motion.div variants={titleVariants} className="pt-1">
            <h1
              className="text-center text-[clamp(2.7rem,5.7vw,6rem)] font-bold leading-[0.94] tracking-[-0.05em] text-[#f7d37d] drop-shadow-[0_14px_28px_rgba(42,7,11,0.32)]"
              style={displaySerifStyle}
            >
              Dân chủ tư sản
            </h1>
          </Motion.div>

          <TitleAccent isPresent={isPresent} />

          <div className="mt-6 flex min-h-0 flex-1 items-center sm:mt-8">
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)] lg:items-center xl:gap-5">
              {cardItems.map((item, index) => (
                <div key={item.number} className="contents">
                  <BourgeoisCard item={item} index={index} isPresent={isPresent} />
                  {index < cardItems.length - 1 ? <Connector index={index} isPresent={isPresent} /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

import { motion as Motion, useIsPresent } from "framer-motion";
import {
  Flame,
  House,
  MessageSquareText,
  Sparkles,
  UsersRound,
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
    <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] border border-[#d98e49]/52 bg-[linear-gradient(180deg,rgba(28,12,20,0.7),rgba(14,12,24,0.48))] shadow-[0_22px_52px_rgba(0,0,0,0.24)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(255,84,24,0.1),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

      <svg viewBox="0 0 900 760" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="primitiveStroke" x1="80" y1="120" x2="760" y2="660">
            <stop offset="0" stopColor="#ff9f57" />
            <stop offset="1" stopColor="#e78a34" />
          </linearGradient>
          <linearGradient id="primitiveGlow" x1="450" y1="520" x2="450" y2="690">
            <stop offset="0" stopColor="#ffb962" />
            <stop offset="1" stopColor="#ff7c29" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#primitiveStroke)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.96">
          <path d="M26 628C114 606 166 596 244 596C338 596 406 612 502 610C586 608 644 588 732 590C794 592 844 606 874 620" opacity="0.34" />
          <path d="M40 370C94 336 126 304 176 308L234 242L276 298L314 328L356 338L430 404" opacity="0.92" />
          <path d="M118 396C164 382 206 360 226 330" opacity="0.72" />
          <path d="M684 350C710 296 742 250 796 246C834 244 860 268 862 302" opacity="0.86" />
          <path d="M722 364C754 318 776 294 790 276" opacity="0.72" />
          <path d="M778 360C792 332 796 302 796 268" opacity="0.68" />
          <path d="M84 440C78 420 62 414 48 420C34 426 28 446 40 456" opacity="0.54" />
          <path d="M112 446C122 430 142 428 154 438C166 448 168 462 158 472" opacity="0.54" />
          <path d="M792 456C804 432 830 432 846 444C862 456 866 478 854 486" opacity="0.52" />
          <path d="M670 464C684 444 708 442 724 454C736 462 742 478 734 490" opacity="0.5" />

          <path d="M338 210h74c18 0 34 14 34 34v18c0 20-16 36-36 36h-18l-26 24v-24h-28c-18 0-34-14-34-34v-20c0-18 16-34 34-34Z" />
          <circle cx="362" cy="256" r="6" fill="#ffbe63" stroke="none" />
          <circle cx="394" cy="256" r="6" fill="#ffbe63" stroke="none" />
          <circle cx="426" cy="256" r="6" fill="#ffbe63" stroke="none" />

          <path d="M302 576c26-32 194-36 220 0" opacity="0.84" />
          <path d="M346 612c20-12 128-12 148 0" opacity="0.7" />
          <path d="M388 540c18-18 80-18 98 0" opacity="0.7" />

          <path d="M210 420c0-30 20-54 48-54c28 0 48 24 48 54" />
          <circle cx="258" cy="336" r="32" />
          <path d="M226 332c8-26 40-38 60-24c16 12 20 18 22 30" opacity="0.74" />
          <path d="M202 420c0 34-18 54-18 92c0 34 16 58 46 86" opacity="0.92" />
          <path d="M314 422c0 34 18 54 18 92c0 30-10 58-28 82" opacity="0.92" />
          <path d="M210 604c18 6 48 6 68 0" opacity="0.82" />
          <path d="M222 628c14 20 20 54 16 86" opacity="0.72" />
          <path d="M282 628c-10 24-10 52 0 86" opacity="0.72" />

          <path d="M388 390c0-42 24-76 60-76c36 0 60 34 60 76" />
          <circle cx="448" cy="282" r="36" />
          <path d="M414 284c16-30 56-36 76-10" opacity="0.74" />
          <path d="M392 390c-4 28-8 64-26 98" opacity="0.78" />
          <path d="M508 390c12 28 18 62 12 104" opacity="0.78" />
          <path d="M426 486c20 8 44 10 70 0" opacity="0.7" />
          <path d="M524 320c38 32 46 70 36 114" />
          <path d="M544 354c16-10 28-26 34-46" />

          <path d="M612 430c0-26 18-46 40-46c22 0 40 20 40 46" />
          <circle cx="652" cy="364" r="26" />
          <path d="M630 362c6-18 30-30 48-20" opacity="0.74" />
          <path d="M616 430c-4 26-6 48 8 82" opacity="0.76" />
          <path d="M688 430c12 24 14 44 16 80" opacity="0.76" />

          <path d="M128 562c0-28 18-50 44-50c24 0 44 22 44 50" />
          <circle cx="172" cy="528" r="28" />
          <path d="M142 566c-16 16-20 30-22 54" opacity="0.72" />
          <path d="M202 566c14 14 18 28 24 58" opacity="0.72" />
          <path d="M122 628c10 24 16 48 14 78" opacity="0.66" />
          <path d="M214 632c-14 22-18 44-14 76" opacity="0.66" />

          <path d="M658 586c0-28 18-50 44-50c24 0 44 22 44 50" />
          <circle cx="702" cy="552" r="28" />
          <path d="M634 624c18 14 22 34 20 72" opacity="0.66" />
          <path d="M734 624c-12 18-16 38-14 72" opacity="0.66" />

          <path d="M388 632l18 16m80-16-18 16m-58-10 20 28m22-30 18 30" stroke="url(#primitiveGlow)" strokeWidth="8" />
        </g>

        <Motion.g
          animate={
            isPresent
              ? {
                  scale: [1, 1.06, 0.98, 1],
                  opacity: [0.88, 1, 0.82, 0.95],
                }
              : { opacity: 0, scale: 0.9 }
          }
          transition={
            isPresent
              ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          transform="translate(0 0)"
        >
          <path d="M426 618c-26-36 18-56 10-96c34 20 44 56 24 84c16-10 34-6 34 20c0 32-24 54-54 54c-32 0-54-18-54-48c0-26 16-32 40-14Z" fill="rgba(255,162,72,0.36)" stroke="#ffb962" strokeWidth="4" />
          <path d="M434 626c-14-18 8-34 4-58c20 12 26 32 14 50c10-4 18 2 18 18c0 18-12 28-28 28c-16 0-28-10-28-26c0-16 8-20 20-12Z" fill="rgba(255,118,34,0.48)" stroke="#ff8f3a" strokeWidth="4" />
        </Motion.g>
      </svg>
    </div>
  );
}

function InsightCard({ item, index, isPresent }) {
  const Icon = item.icon;

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      className="relative overflow-hidden rounded-[1.9rem] border border-[#ca9756]/44 bg-[linear-gradient(180deg,rgba(12,26,64,0.62),rgba(9,16,40,0.4))] px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(63,112,255,0.12),transparent_38%),radial-gradient(circle_at_left,rgba(255,90,34,0.08),transparent_28%)]" />
      <div className="relative z-10 flex min-h-[136px] items-center gap-5">
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
          className="flex h-[6.5rem] w-[6.5rem] shrink-0 items-center justify-center rounded-full border border-[#e38542]/72 text-[#f3c56d]"
        >
          <Icon className="h-[4rem] w-[4rem]" />
        </Motion.div>

        <h3 className="whitespace-pre-line text-[1.48rem] leading-[1.22] text-[#f7dfb3] sm:text-[1.66rem] xl:text-[1.86rem]">
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
      <img
        src={openingBase}
        alt="Slide dân chủ trong xã hội nguyên thủy"
        className="absolute inset-0 h-full w-full object-cover"
      />

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
            className="text-center text-[clamp(3rem,5.8vw,6.4rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#f7d37d] drop-shadow-[0_14px_28px_rgba(42,7,11,0.32)]"
            style={displaySerifStyle}
          >
            Dân chủ trong xã hội nguyên thủy
          </h1>
        </Motion.div>

        <TitleAccent isPresent={isPresent} />

        <div className="mt-7 grid min-h-0 flex-1 gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch xl:gap-7">
          <Motion.section custom="left" variants={panelVariants} className="flex min-h-0">
            <SceneIllustration isPresent={isPresent} />
          </Motion.section>

          <Motion.div
            custom="right"
            variants={panelVariants}
            className="grid auto-rows-fr gap-4 lg:gap-5"
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

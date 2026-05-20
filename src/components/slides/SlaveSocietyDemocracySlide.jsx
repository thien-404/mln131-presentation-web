import { motion as Motion, useIsPresent } from "framer-motion";
import { Landmark, Scale, Star } from "lucide-react";
import contitudeImage from "../../background/contitude.png";
import freedomImage from "../../background/freedom.png";
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
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.98,
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

const panelVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index === 0 ? -56 : 56,
    y: 24,
    scale: 0.97,
    filter: "blur(10px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (index) => ({
    opacity: 0,
    x: index === 0 ? -34 : 34,
    y: 18,
    scale: 0.968,
    filter: "blur(10px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const chipVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 22,
    x: index === 0 ? -24 : 24,
    scale: 0.975,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (index) => ({
    opacity: 0,
    y: 16,
    x: index === 0 ? -16 : 16,
    scale: 0.97,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  }),
};

const panelItems = [
  {
    title: "Công dân tự do",
    caption: "Tham gia chính trị",
    image: freedomImage,
    alt: "Nhóm công dân tự do đang bàn bạc trước công trình cổ đại",
    tone: "warm",
  },
  {
    title: "Thiểu số có quyền",
    caption: "Quyền dân chủ chỉ thuộc về thiểu số",
    image: contitudeImage,
    alt: "Biểu tượng quyền lực của thiểu số trong xã hội chiếm hữu nô lệ",
    tone: "cool",
  },
];

const chipItems = [
  {
    title: "Gắn với nhà nước đầu tiên",
    icon: Landmark,
    tone: "warm",
  },
  {
    title: "Phục vụ lợi ích giai cấp chủ nô",
    icon: Scale,
    tone: "cool",
  },
];

const ambientDots = [
  { className: "left-[4%] top-[21%]", size: "h-1 w-1", color: "bg-[#ff7642]/82", delay: 0.1 },
  { className: "left-[8%] bottom-[24%]", size: "h-1.5 w-1.5", color: "bg-[#ff6330]/80", delay: 0.72 },
  { className: "right-[18%] top-[14%]", size: "h-1.5 w-1.5", color: "bg-[#ffcb73]/84", delay: 0.32 },
  { className: "right-[10%] bottom-[16%]", size: "h-1 w-1", color: "bg-[#426fff]/80", delay: 1.02 },
];

function TitleDivider({ isPresent }) {
  return (
    <Motion.div variants={fadeUpVariants} className="mx-auto mt-4 flex w-full max-w-[1040px] items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#dc8f4c]/54 to-[#dc8f4c]/20" />
      <Motion.span
        animate={
          isPresent
            ? {
                opacity: [0.66, 1, 0.66],
                scale: [0.92, 1.08, 0.92],
                rotate: [45, 45, 45],
              }
            : { opacity: 0, scale: 0.82 }
        }
        transition={
          isPresent
            ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="h-3.5 w-3.5 shrink-0 rotate-45 rounded-[0.24rem] bg-[#ffc968] shadow-[0_0_18px_rgba(255,186,89,0.95)]"
      />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#dc8f4c]/54 to-[#dc8f4c]/20" />
    </Motion.div>
  );
}

function PanelDivider({ isPresent }) {
  return (
    <div className="mt-2 flex items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cf4b2b]/92 to-[#cf4b2b]/20" />
      <Motion.span
        animate={isPresent ? { opacity: [0.7, 1, 0.7], scale: [0.92, 1.08, 0.92] } : { opacity: 0, scale: 0.82 }}
        transition={
          isPresent
            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.18 }
        }
        className="text-[#ff5f31]"
      >
        <Star className="h-5 w-5 fill-current" strokeWidth={1.8} />
      </Motion.span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#cf4b2b]/92 to-[#cf4b2b]/20" />
    </div>
  );
}

function IllustrationPanel({ item, index, isPresent }) {
  const frameTone =
    item.tone === "warm"
      ? "border-[#e66739]/72 bg-[linear-gradient(180deg,rgba(56,10,10,0.76),rgba(21,9,18,0.66))]"
      : "border-[#cb973f]/60 bg-[linear-gradient(180deg,rgba(8,18,42,0.78),rgba(9,12,24,0.68))]";

  const captionGlow =
    item.tone === "warm"
      ? "shadow-[0_0_24px_rgba(255,106,48,0.18)]"
      : "shadow-[0_0_24px_rgba(255,203,115,0.14)]";

  return (
    <Motion.article
      custom={index}
      variants={panelVariants}
      className={`relative overflow-hidden rounded-[2rem] border ${frameTone} px-6 pb-5 pt-5 shadow-[0_24px_56px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-7 sm:pb-6`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,88,24,0.12),transparent_34%),radial-gradient(circle_at_right,rgba(48,97,220,0.1),transparent_34%)]" />
      <div className="relative z-10 flex h-full flex-col">
        <h2
          className="text-center text-[clamp(1.9rem,2.5vw,3.15rem)] font-bold leading-none tracking-[-0.03em] text-[#f6cf7c]"
          style={displaySerifStyle}
        >
          {item.title}
        </h2>

        <PanelDivider isPresent={isPresent} />

        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -5, 0],
                  scale: [1, 1.012, 1],
                }
              : { opacity: 0, scale: 0.96 }
          }
          transition={
            isPresent
              ? { duration: 4.6 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="relative mt-4 overflow-hidden rounded-[1.55rem] border border-[#c98d4b]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-1 py-1"
        >
          <img
            src={item.image}
            alt={item.alt}
            className="block h-[13.8rem] w-full rounded-[1.3rem] object-contain sm:h-[16rem] lg:h-[18rem] xl:h-[20rem]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_84%,rgba(255,184,109,0.04))]" />
        </Motion.div>

        <Motion.div
          variants={fadeUpVariants}
          className={`relative mt-4 flex items-center justify-center ${captionGlow}`}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[0.18rem] bg-[#ffc968] shadow-[0_0_18px_rgba(255,186,89,0.92)]" />
          <p className="px-3 text-center text-[clamp(1.55rem,2vw,2.2rem)] leading-tight text-[#f8efd6]">
            {item.caption}
          </p>
        </Motion.div>
      </div>
    </Motion.article>
  );
}

function InfoChip({ item, index, isPresent }) {
  const Icon = item.icon;
  const toneClass =
    item.tone === "warm"
      ? "border-[#df6c3c]/70 bg-[linear-gradient(180deg,rgba(44,10,10,0.82),rgba(18,8,16,0.72))]"
      : "border-[#c39646]/62 bg-[linear-gradient(180deg,rgba(8,16,36,0.84),rgba(8,11,24,0.74))]";

  return (
    <Motion.article
      custom={index}
      variants={chipVariants}
      className={`relative overflow-hidden rounded-[1.65rem] border ${toneClass} px-5 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:px-6 sm:py-5`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,87,24,0.09),transparent_30%),radial-gradient(circle_at_right,rgba(47,102,228,0.08),transparent_34%)]" />
      <div className="relative z-10 flex items-center gap-4">
        <Motion.div
          animate={
            isPresent
              ? {
                  y: [0, -2, 0],
                  boxShadow: [
                    "0 0 0 rgba(255,192,99,0.06)",
                    "0 0 24px rgba(255,192,99,0.14)",
                    "0 0 0 rgba(255,192,99,0.06)",
                  ],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={
            isPresent
              ? { duration: 3.8 + index * 0.24, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.18 }
          }
          className="flex h-[4.8rem] w-[4.8rem] shrink-0 items-center justify-center rounded-full border border-[#e2a659]/78 text-[#f3c56d]"
        >
          <Icon className="h-[2.35rem] w-[2.35rem]" strokeWidth={1.55} />
        </Motion.div>

        <p className="text-[clamp(1.35rem,1.6vw,2rem)] leading-tight text-[#f8efd6]">
          {item.title}
        </p>
      </div>
    </Motion.article>
  );
}

export default function SlaveSocietyDemocracySlide() {
  const isPresent = useIsPresent();

  return (
    <Motion.section
      initial="hidden"
      animate={isPresent ? "show" : "exit"}
      variants={shellVariants}
      className="relative h-full overflow-hidden text-[#f8e2af]"
      style={{ perspective: 1800 }}
    >
      <SlideBackdrop variant="slaveSociety" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_50%,rgba(255,92,26,0.18),transparent_24%),radial-gradient(circle_at_92%_48%,rgba(36,96,222,0.14),transparent_22%),linear-gradient(180deg,rgba(6,8,22,0.06),rgba(6,8,22,0.18))]" />
      <div className="absolute inset-y-0 left-0 w-[44%] bg-[linear-gradient(90deg,rgba(62,10,10,0.24),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[38%] bg-[linear-gradient(270deg,rgba(8,24,70,0.18),transparent)]" />

      {ambientDots.map((dot) => (
        <Motion.span
          key={dot.className}
          animate={
            isPresent
              ? {
                  opacity: [0.24, 1, 0.24],
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

      <div className="relative z-10 flex h-full flex-col px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto flex h-full w-full max-w-[1640px] flex-col overflow-hidden rounded-[2.2rem] border border-[#c7934b]/58 px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:px-7 lg:px-10 lg:py-6">
          <Motion.div variants={fadeUpVariants}>
            <h1
              className="text-center text-[clamp(2.45rem,4.8vw,5.7rem)] font-bold leading-[0.94] tracking-[-0.05em] text-[#f7cf77] drop-shadow-[0_16px_30px_rgba(42,7,11,0.34)]"
              style={displaySerifStyle}
            >
              Dân chủ trong xã hội chiếm hữu nô lệ
            </h1>
          </Motion.div>

          <TitleDivider isPresent={isPresent} />

          <div className="mt-5 grid min-h-0 flex-1 gap-4 lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)_auto] xl:gap-6">
            {panelItems.map((item, index) => (
              <IllustrationPanel key={item.title} item={item} index={index} isPresent={isPresent} />
            ))}

            {chipItems.map((item, index) => (
              <InfoChip key={item.title} item={item} index={index} isPresent={isPresent} />
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}

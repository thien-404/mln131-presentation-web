import { motion as Motion } from "framer-motion";
import {
  Building2,
  ChartColumnIncreasing,
  CheckCheck,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import openingBase from "../../assets/slide-opening-base.svg";

const shellVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardItems = [
  {
    title: "Quyền lực\nthuộc về nhân dân",
    icon: Users,
  },
  {
    title: "Nhân dân là\nchủ thể xã hội",
    icon: Users,
  },
  {
    title: "Gắn với quyền\ncon người, quyền công dân",
    icon: ShieldCheck,
  },
  {
    title: "Giá trị tiến bộ\ncủa nhân loại",
    icon: ChartColumnIncreasing,
  },
];

const orbitItems = [
  {
    className: "left-[0%] top-[30%] sm:left-[4%] sm:top-[26%]",
    icon: Users,
    delay: 0.2,
    size: "h-14 w-14 sm:h-20 sm:w-20",
  },
  {
    className: "right-[0%] top-[38%] sm:right-[2%] sm:top-[34%]",
    icon: Scale,
    delay: 0.5,
    size: "h-14 w-14 sm:h-20 sm:w-20",
  },
  {
    className: "left-[4%] bottom-[4%] sm:left-[8%] sm:bottom-[2%]",
    icon: CheckCheck,
    delay: 0.34,
    size: "h-14 w-14 sm:h-20 sm:w-20",
  },
];

function AccentSpark({ className, delay }) {
  return (
    <Motion.span
      animate={{
        opacity: [0.32, 1, 0.32],
        scale: [0.84, 1.16, 0.84],
      }}
      transition={{ duration: 2.8, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className} h-2.5 w-2.5 rounded-full bg-[#ffc86b] shadow-[0_0_18px_rgba(255,200,110,0.9)]`}
    />
  );
}

function OrbitBadge({ className, icon: Icon, size, delay }) {
  return (
    <div className={`absolute ${className}`}>
      <Motion.div
        animate={{
          y: [0, -7, 0],
          boxShadow: [
            "0 0 0 rgba(255,194,108,0.08)",
            "0 0 22px rgba(255,194,108,0.2)",
            "0 0 0 rgba(255,194,108,0.08)",
          ],
        }}
        transition={{ duration: 4.3, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`flex ${size} items-center justify-center rounded-full border border-[#d89f58]/70 bg-[#5c101b]/18 backdrop-blur-sm`}
      >
        <Icon className="h-6 w-6 text-[#efb567] sm:h-8 sm:w-8" strokeWidth={1.5} />
      </Motion.div>
    </div>
  );
}

function ConceptCard({ icon: Icon, title, index }) {
  return (
    <Motion.article
      variants={fadeUpVariants}
      className="group relative overflow-hidden rounded-[1.8rem] border border-[#d79d54]/52 bg-[linear-gradient(180deg,rgba(123,18,24,0.16),rgba(34,17,45,0.28))] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,56,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <Motion.span
        initial={{ opacity: 0.6, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.72, delay: 0.12 + index * 0.06 }}
        className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc775] to-transparent"
      />
      <Motion.span
        initial={{ opacity: 0.6, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.72, delay: 0.24 + index * 0.06 }}
        className="absolute bottom-8 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f0b667] to-transparent"
      />

      <div className="relative z-10 flex min-h-[188px] flex-col items-center justify-center text-center sm:min-h-[220px]">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#d89f58]/80 text-[#efb668] sm:h-30 sm:w-30">
          <Icon className="h-11 w-11 sm:h-14 sm:w-14" strokeWidth={1.3} />
        </div>

        <h3 className="mt-5 whitespace-pre-line text-[1.35rem] leading-[1.18] text-[#f9dfad] sm:text-[1.7rem] xl:text-[1.95rem]">
          {title}
        </h3>
      </div>
    </Motion.article>
  );
}

export default function DemocracyConceptSlide() {
  return (
    <section className="relative min-h-full overflow-hidden text-[#f8e2af]">
      <img
        src={openingBase}
        alt="Slide khái niệm dân chủ"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_28%,rgba(255,107,36,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(75,108,255,0.18),transparent_22%),linear-gradient(90deg,rgba(49,7,6,0.1),rgba(49,7,6,0)_24%)]" />

      <Motion.div
        variants={shellVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 min-h-full px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-8"
      >
        <div className="grid min-h-full gap-5 lg:grid-cols-[0.93fr_1.07fr] lg:gap-6">
          <div className="flex min-h-0 flex-col">
            <Motion.div variants={fadeUpVariants} className="pt-2 sm:pt-4">
              <div className="inline-flex w-fit items-center gap-4 rounded-full border border-[#d79d54] bg-[#67100f]/28 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1be6e] backdrop-blur-sm sm:px-6 sm:text-base">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d89d52] bg-[#8e1d15]/54 text-[#f6c677]">
                  <Sparkles className="h-5 w-5" strokeWidth={2} />
                </span>
                <span>Chủ đề học tập</span>
              </div>
            </Motion.div>

            <Motion.div variants={fadeUpVariants} className="mt-6 sm:mt-8">
              <h1
                className="max-w-4xl text-[clamp(3.6rem,8vw,7rem)] font-bold leading-[0.85] tracking-[-0.05em] text-[#fbe1ac] drop-shadow-[0_10px_24px_rgba(42,7,11,0.3)]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Khái niệm
                <br />
                dân chủ
              </h1>
            </Motion.div>

            <Motion.div variants={fadeUpVariants} className="mt-6 flex items-center gap-4 sm:mt-8">
              <span className="h-3 w-3 rounded-full bg-[#f1c06f] shadow-[0_0_15px_rgba(241,192,111,0.8)]" />
              <span className="h-px max-w-[620px] flex-1 bg-gradient-to-r from-[#d49749] via-[#f4c778] to-transparent" />
            </Motion.div>

            <Motion.div variants={fadeUpVariants} className="relative mt-5 hidden min-h-[220px] flex-1 overflow-hidden lg:block xl:min-h-[280px]">
              <div className="absolute inset-x-[10%] bottom-[0%] h-[74%] rounded-[50%] border border-[#c98439]/28 bg-[radial-gradient(circle_at_50%_12%,rgba(153,33,27,0.18),rgba(0,0,0,0)_72%)]" />
              <div className="absolute inset-x-[20%] top-[6%] h-[42%] rounded-[50%] border border-[#de9e55]/22" />
              <div className="absolute inset-x-[12%] top-[10%] h-[52%] rounded-[50%] border border-[#d79a53]/14 border-dashed" />

              <AccentSpark className="left-[8%] top-[12%]" delay={0.18} />
              <AccentSpark className="right-[12%] top-[52%]" delay={0.64} />
              <AccentSpark className="left-[18%] bottom-[14%]" delay={0.36} />
              <AccentSpark className="right-[24%] top-[18%]" delay={0.94} />

              {orbitItems.map((item) => (
                <OrbitBadge key={item.className} {...item} />
              ))}

              <div className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[#e8a85b]/82">
                <Building2 className="h-24 w-24 xl:h-28 xl:w-28" strokeWidth={1.1} />
              </div>

              <div className="absolute left-1/2 top-[44%] flex w-[68%] -translate-x-1/2 items-end justify-between text-[#e8a85b]/78">
                <Users className="h-22 w-22 xl:h-28 xl:w-28" strokeWidth={1.15} />
                <Users className="h-16 w-16 xl:h-20 xl:w-20" strokeWidth={1.15} />
                <Users className="h-20 w-20 xl:h-24 xl:w-24" strokeWidth={1.15} />
              </div>
            </Motion.div>
          </div>

          <Motion.div
            variants={shellVariants}
            className="grid min-h-0 gap-4 pb-2 sm:gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:pb-0"
          >
            {cardItems.map((item, index) => (
              <ConceptCard key={item.title} {...item} index={index} />
            ))}
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
}

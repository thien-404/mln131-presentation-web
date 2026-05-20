import { motion as Motion } from "framer-motion";
import {
  Building2,
  Flag,
  HandFist,
  Scale,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import SlideBackdrop from "./shared/SlideBackdrop";

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

const nodeItems = [
  {
    title: "Thành quả\ncủa đấu tranh\ngiai cấp",
    icon: HandFist,
  },
  {
    title: " phương diện quyền lực",
    icon: Scale,
  },
  {
    title: " phương diện chế độ xã hội và\nlĩnh vực chính trị",
    icon: Building2,
  },
  {
    title: "phương diện tổ chức và\nquản lý xã hội",
    icon: Star,
  },
];

function TopicBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-4 rounded-full border border-[#d79d54] bg-[#67100f]/28 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1be6e] backdrop-blur-sm sm:px-6 sm:text-base">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d89d52] bg-[#8e1d15]/54 text-[#f6c677]">
        <Sparkles className="h-5 w-5" strokeWidth={2} />
      </span>
      <span>Chủ đề học tập</span>
    </div>
  );
}

function NodeCard({ icon: Icon, title }) {
  return (
    <Motion.article
      variants={fadeUpVariants}
      className="relative overflow-hidden rounded-[1.9rem] border border-[#d79d54]/56 bg-[linear-gradient(180deg,rgba(122,19,24,0.18),rgba(31,16,41,0.28))] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,56,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <Motion.span
        initial={{ opacity: 0.6, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.72 }}
        className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc775] to-transparent"
      />
      <Motion.span
        initial={{ opacity: 0.6, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.82, delay: 0.14 }}
        className="absolute bottom-3 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f0b667] to-transparent"
      />

      <div className="relative z-10 flex min-h-[154px] items-center gap-4 sm:min-h-[170px] sm:gap-5 xl:min-h-[198px] xl:gap-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#d89f58]/80 text-[#efb668] sm:h-24 sm:w-24 xl:h-30 xl:w-30">
          <Icon className="h-9 w-9 sm:h-11 sm:w-11 xl:h-14 xl:w-14" strokeWidth={1.35} />
        </div>

        <h3 className="whitespace-pre-line text-[1.15rem] leading-[1.18] text-[#f9dfad] sm:text-[1.35rem] xl:text-[1.9rem]">
          {title}
        </h3>
      </div>
    </Motion.article>
  );
}

function CenterCore() {
  return (
    <Motion.div
      variants={fadeUpVariants}
      className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px] xl:h-[392px] xl:w-[392px]"
    >
      <Motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(255,120,40,0.12)",
            "0 0 48px rgba(255,120,40,0.22)",
            "0 0 0 rgba(255,120,40,0.12)",
          ],
        }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-[#f1b86d]/80 bg-[radial-gradient(circle_at_50%_36%,rgba(184,28,28,0.34),rgba(40,10,26,0.82)_72%)]"
      />
      <div className="absolute inset-[-5%] rounded-full border border-[#d9a056]/45" />
      <div className="absolute inset-[-10%] rounded-full border border-[#d9a056]/24 border-dashed" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#fbe2ad]">
        <Users className="h-16 w-16 text-[#efb566] sm:h-20 sm:w-20 xl:h-24 xl:w-24" strokeWidth={1.2} />
        <Flag className="-mt-12 ml-14 h-7 w-7 text-[#efb566] sm:-mt-14 sm:ml-18 sm:h-8 sm:w-8 xl:-mt-16 xl:ml-22 xl:h-9 xl:w-9" strokeWidth={1.6} />
        <h2
          className="mt-4 text-[clamp(2.6rem,5vw,4.8rem)] font-bold leading-none tracking-[-0.04em]"
          style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
        >
          Dân chủ
        </h2>
      </div>
    </Motion.div>
  );
}

function DesktopConnectors() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute left-[31.8%] top-[46%] h-px w-[8.5%] bg-gradient-to-r from-[#f1ba6d] to-[#ffc775]" />
      <div className="absolute left-[31.8%] top-[71.5%] h-px w-[8.5%] bg-gradient-to-r from-[#f1ba6d] to-[#ffc775]" />
      <div className="absolute right-[31.8%] top-[46%] h-px w-[8.5%] bg-gradient-to-l from-[#f1ba6d] to-[#ffc775]" />
      <div className="absolute right-[31.8%] top-[71.5%] h-px w-[8.5%] bg-gradient-to-l from-[#f1ba6d] to-[#ffc775]" />

      <span className="absolute left-[39.5%] top-[45.1%] h-4 w-4 rounded-full bg-[#ffd083] shadow-[0_0_18px_rgba(255,208,131,0.9)]" />
      <span className="absolute left-[39.5%] top-[70.6%] h-4 w-4 rounded-full bg-[#ffd083] shadow-[0_0_18px_rgba(255,208,131,0.9)]" />
      <span className="absolute right-[39.5%] top-[45.1%] h-4 w-4 rounded-full bg-[#ffd083] shadow-[0_0_18px_rgba(255,208,131,0.9)]" />
      <span className="absolute right-[39.5%] top-[70.6%] h-4 w-4 rounded-full bg-[#ffd083] shadow-[0_0_18px_rgba(255,208,131,0.9)]" />
    </div>
  );
}

export default function MarxLeninDemocracySlide() {
  return (
    <section className="relative min-h-full overflow-hidden text-[#f8e2af]">
      <SlideBackdrop variant="marxLenin" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,108,36,0.16),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(75,108,255,0.16),transparent_22%)]" />

      <Motion.div
        variants={shellVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 min-h-full px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-8"
      >
        <div className="flex min-h-full flex-col">
          <Motion.div variants={fadeUpVariants} className="pt-2 sm:pt-4">
            <TopicBadge />
          </Motion.div>

          <Motion.div variants={fadeUpVariants} className="mt-6 sm:mt-8">
            <h1
              className="max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.045em] text-[#fbe1ac] drop-shadow-[0_10px_24px_rgba(42,7,11,0.3)]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Dân chủ theo
              <br />
              quan điểm Mác - Lênin
            </h1>
          </Motion.div>

          <Motion.div variants={fadeUpVariants} className="mt-5 flex items-center gap-4 sm:mt-6">
            <span className="h-3 w-3 rounded-full bg-[#f1c06f] shadow-[0_0_15px_rgba(241,192,111,0.8)]" />
            <span className="h-px max-w-[840px] flex-1 bg-gradient-to-r from-[#d49749] via-[#f4c778] to-transparent" />
          </Motion.div>

          <div className="relative mt-5 flex-1 pb-4 sm:mt-6 lg:pb-0">
            <DesktopConnectors />

            <div className="grid min-h-full gap-4 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[1fr_1fr] lg:items-center lg:gap-x-6 lg:gap-y-4 xl:gap-x-8 xl:gap-y-6">
              <div className="grid gap-4 self-end lg:row-span-2 lg:grid-rows-2">
                <NodeCard {...nodeItems[0]} />
                <NodeCard {...nodeItems[1]} />
              </div>

              <div className="order-first lg:order-none lg:row-span-2">
                <CenterCore />
              </div>

              <div className="grid gap-4 self-end lg:row-span-2 lg:grid-rows-2">
                <NodeCard {...nodeItems[2]} />
                <NodeCard {...nodeItems[3]} />
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}

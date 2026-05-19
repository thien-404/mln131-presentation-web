import { motion as Motion } from "framer-motion";
import {
  ArrowLeftRight,
  BadgeCheck,
  Building2,
  Lightbulb,
  MessageSquareText,
  Scale,
  Shield,
  Star,
  Target,
  Users,
  Vote,
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

function TopicHeader() {
  return (
    <Motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4 text-[#f1be6e]">
      <div className="inline-flex items-center rounded-full border border-[#d79d54] bg-[#67100f]/32 pr-6 backdrop-blur-sm">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-r border-[#d89d52] bg-[#8e1d15]/54 text-[#f6c677]">
          <Star className="h-5 w-5 fill-current" strokeWidth={1.8} />
        </span>
        <span className="px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] sm:text-base">
          Chủ đề học tập
        </span>
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <span className="h-px w-16 bg-gradient-to-r from-[#efbf72] via-[#efbf72] to-transparent" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#efbf72] shadow-[0_0_16px_rgba(239,191,114,0.8)]" />
      </div>

      <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#efc274] sm:text-base">
        Tư tưởng Mác - Lênin
      </span>
    </Motion.div>
  );
}

function AccentLine() {
  return (
    <Motion.div variants={fadeUpVariants} className="mt-4 flex items-center gap-3 sm:mt-5">
      <span className="h-3 w-3 rounded-full bg-[#f1c06f] shadow-[0_0_15px_rgba(241,192,111,0.8)]" />
      <span className="h-px flex-1 bg-gradient-to-r from-[#d49749] via-[#f4c778] to-transparent" />
    </Motion.div>
  );
}

function PillarCard({ title, icon: Icon, tone = "warm", index }) {
  const panelTone =
    tone === "cool"
      ? "bg-[linear-gradient(180deg,rgba(18,29,74,0.34),rgba(14,18,53,0.28))]"
      : "bg-[linear-gradient(180deg,rgba(120,17,17,0.34),rgba(76,9,18,0.26))]";

  return (
    <Motion.article
      variants={fadeUpVariants}
      className={`relative h-full overflow-hidden rounded-[1.8rem] border border-[#d79d54]/44 ${panelTone} px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm`}
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,56,0.08),transparent_28%)]" />
      <Motion.span
        initial={{ opacity: 0.55, scaleX: 0.35 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.12 + index * 0.08 }}
        className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc775] to-transparent"
      />

      <div className="relative z-10 flex h-full min-h-[108px] items-center gap-4 xl:min-h-[118px]">
        <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-[#d89f58]/80 text-[#efb668] sm:h-20 sm:w-20 xl:h-22 xl:w-22">
          <Icon className="h-9 w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11" strokeWidth={1.35} />
        </div>

        <h3 className="text-[1.3rem] leading-[1.12] text-[#f9dfad] sm:text-[1.5rem] xl:text-[1.75rem]">
          {title}
        </h3>
      </div>
    </Motion.article>
  );
}

function PanelHeading({ title }) {
  return (
    <div className="relative z-10">
      <h2
        className="text-center text-[clamp(2.8rem,4vw,4.6rem)] font-bold leading-none tracking-[-0.04em] text-[#fbe1ac]"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        {title}
      </h2>

      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#efb768] to-[#efb768]" />
        <Star className="h-5 w-5 fill-current text-[#efb768]" strokeWidth={1.8} />
        <span className="h-px w-16 bg-gradient-to-l from-transparent via-[#efb768] to-[#efb768]" />
      </div>
    </div>
  );
}

function PillarPanel({ title, items, tone = "warm" }) {
  const panelTone =
    tone === "cool"
      ? "bg-[linear-gradient(180deg,rgba(20,24,72,0.28),rgba(15,16,48,0.28))]"
      : "bg-[linear-gradient(180deg,rgba(118,14,16,0.26),rgba(56,8,17,0.24))]";

  return (
    <Motion.section
      variants={fadeUpVariants}
      className={`relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[2.15rem] border border-[#d79d54]/56 ${panelTone} px-5 pb-5 pt-5 shadow-[0_20px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-6 xl:px-7`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,56,0.08),transparent_30%)]" />
      <Motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc775] to-transparent"
      />

      <PanelHeading title={title} />

      <div className="relative z-10 mt-5 grid flex-1 auto-rows-fr gap-4">
        {items.map((item, index) => (
          <PillarCard key={item.title} {...item} tone={tone} index={index} />
        ))}
      </div>
    </Motion.section>
  );
}

function CenterConnector() {
  return (
    <Motion.div
      variants={fadeUpVariants}
      className="relative mx-auto flex h-[178px] w-[178px] items-center justify-center sm:h-[198px] sm:w-[198px] xl:h-[218px] xl:w-[218px]"
    >
      <div className="absolute inset-[-26%] rounded-full border border-[#d9a056]/10" />
      <div className="absolute inset-[-10%] rounded-full border border-[#d9a056]/18 border-dashed" />
      <Motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(255,120,40,0.12)",
            "0 0 42px rgba(255,120,40,0.24)",
            "0 0 0 rgba(255,120,40,0.12)",
          ],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-[#f1b86d]/80 bg-[radial-gradient(circle_at_50%_36%,rgba(184,28,28,0.34),rgba(40,10,26,0.82)_72%)]"
      />

      <ArrowLeftRight
        className="absolute left-[-18%] top-1/2 h-10 w-10 -translate-y-1/2 text-[#f1bc6e] sm:h-12 sm:w-12"
        strokeWidth={2.2}
      />
      <ArrowLeftRight
        className="absolute right-[-18%] top-1/2 h-10 w-10 -translate-y-1/2 text-[#f1bc6e] sm:h-12 sm:w-12"
        strokeWidth={2.2}
      />

      <div className="relative z-10 flex items-center justify-center text-[#fbe2ad]">
        <Scale className="h-16 w-16 text-[#efb566] sm:h-18 sm:w-18 xl:h-20 xl:w-20" strokeWidth={1.3} />
      </div>
    </Motion.div>
  );
}

function AmbientFigures() {
  return (
    <div className="pointer-events-none absolute right-[2.5%] top-[2%] hidden h-[165px] w-[320px] lg:block">
      <div className="absolute right-[8%] top-[2%] text-[#a4522a]/38">
        <Building2 className="h-24 w-24 xl:h-28 xl:w-28" strokeWidth={1} />
      </div>
      <div className="absolute right-[0%] top-[38%] flex items-end gap-2 text-[#8f4c2a]/30">
        <Users className="h-14 w-14 xl:h-16 xl:w-16" strokeWidth={1.05} />
        <Users className="h-10 w-10 xl:h-12 xl:w-12" strokeWidth={1.05} />
      </div>
      <div className="absolute left-[8%] top-[44%] text-[#893f26]/18">
        <Users className="h-16 w-16 xl:h-20 xl:w-20" strokeWidth={1} />
      </div>
    </div>
  );
}

export default function CentralizedDemocracySlide() {
  return (
    <section className="relative h-full overflow-hidden text-[#f8e2af]">
      <img
        src={openingBase}
        alt="Slide nguyên tắc tập trung dân chủ"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(255,108,36,0.16),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(75,108,255,0.15),transparent_22%)]" />
      <div className="absolute inset-[12px] rounded-[2rem] border border-[#d89f58]/42" />
      <AmbientFigures />

      <Motion.div
        variants={shellVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex h-full w-full max-w-[1520px] flex-col px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6 xl:px-12"
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <TopicHeader />

          <Motion.div variants={fadeUpVariants} className="mt-5 sm:mt-6">
            <h1
              className="max-w-[980px] text-[clamp(2.9rem,5vw,5.1rem)] font-bold leading-[0.9] tracking-[-0.045em] text-[#fbe1ac] drop-shadow-[0_10px_24px_rgba(42,7,11,0.3)]"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              Nguyên tắc tập trung dân chủ
            </h1>
          </Motion.div>

          <AccentLine />

          <div className="relative mt-5 flex min-h-0 flex-1 items-stretch sm:mt-6">
            <div className="grid w-full min-h-0 gap-4 lg:grid-cols-[minmax(0,1fr)_190px_minmax(0,1fr)] lg:items-center lg:gap-5 xl:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] xl:gap-6">
              <PillarPanel title="Dân chủ" items={leftItems} tone="warm" />

              <div className="order-first flex items-center justify-center lg:order-none">
                <CenterConnector />
              </div>

              <PillarPanel title="Tập trung" items={rightItems} tone="cool" />
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}

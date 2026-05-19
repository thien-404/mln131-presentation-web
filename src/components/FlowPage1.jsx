import { motion } from "framer-motion";
import {
  ArrowDown,
  Building2,
  CheckCheck,
  Handshake,
  Scale,
  Users,
} from "lucide-react";

const shellVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const orbitItems = [
  {
    className: "left-[8%] top-[16%] sm:left-[16%] sm:top-[12%]",
    icon: Users,
    delay: 0.2,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
  {
    className: "right-[2%] top-[40%] sm:right-[0%] sm:top-[36%]",
    icon: Scale,
    delay: 0.35,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
  {
    className: "left-[10%] bottom-[10%] sm:left-[18%] sm:bottom-[8%]",
    icon: CheckCheck,
    delay: 0.5,
    size: "h-16 w-16 sm:h-24 sm:w-24",
  },
];

function OrbitalIcon({ className, icon: Icon, delay, size }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 0 0 rgba(255,185,94,0.12)",
            "0 0 32px rgba(255,185,94,0.28)",
            "0 0 0 rgba(255,185,94,0.12)",
          ],
        }}
        transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`flex ${size} items-center justify-center rounded-full border border-[#d89a42]/70 bg-[#5c0914]/35 backdrop-blur-md`}
      >
        <Icon className="h-7 w-7 text-[#efb25f] sm:h-10 sm:w-10" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}

function Spark({ className, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{
        opacity: [0.35, 1, 0.35],
        scale: [0.9, 1.2, 0.9],
      }}
      transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className} h-2.5 w-2.5 rounded-full bg-[#ffc86b] shadow-[0_0_18px_rgba(255,195,101,0.9)]`}
    />
  );
}

export default function PageIntroHero() {
  const scrollToNext = () => {
    document.getElementById("ii-union")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#120515] px-4 pb-8 pt-24 text-[#f9dfb1] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(208,37,15,0.36),transparent_38%),radial-gradient(circle_at_40%_80%,rgba(255,89,0,0.22),transparent_30%),radial-gradient(circle_at_88%_26%,rgba(58,82,204,0.26),transparent_34%),linear-gradient(112deg,#5e0208_0%,#7c0710_24%,#3d1024_62%,#08163e_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_20%_100%,rgba(255,94,0,0.22),transparent_44%),radial-gradient(circle_at_82%_100%,rgba(57,105,255,0.18),transparent_38%)]" />
      </div>

      <motion.div
        variants={shellVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1660px] flex-col overflow-hidden rounded-[2rem] border border-[#cb8d3c]/85 px-5 py-6 shadow-[0_0_0_1px_rgba(247,189,105,0.12),0_24px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-8 lg:px-12 lg:py-10"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[#f3b66f]/10" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-12 w-44 -translate-x-1/2 rounded-b-[2rem] border-x border-b border-[#cb8d3c]/85 bg-[linear-gradient(180deg,rgba(157,17,19,0.4),rgba(80,11,23,0.15))] sm:w-56">
          <div className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 bg-[#f3c570] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] shadow-[0_0_18px_rgba(248,196,102,0.55)]" />
        </div>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            variants={fadeUpVariants}
            className="relative z-10 flex max-w-3xl flex-col justify-center pt-8 sm:pt-10"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex w-fit items-center gap-4 rounded-full border border-[#ca8a35] bg-[#5d0911]/55 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f5be6c] shadow-[0_0_24px_rgba(201,119,34,0.15)] backdrop-blur-md sm:px-6 sm:text-base"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d29a4f] bg-[#8f1d15]/70 text-xl text-[#f7c773] shadow-[0_0_16px_rgba(247,199,115,0.25)]">
                ★
              </span>
              <span>Chủ đề học tập</span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="mt-8 max-w-4xl text-[clamp(3.4rem,8vw,7.6rem)] font-black leading-[0.88] tracking-[-0.05em] text-[#fbe2ad] drop-shadow-[0_8px_24px_rgba(39,5,9,0.35)]"
              style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
            >
              Dân chủ và
              <br />
              dân chủ xã hội
              <br />
              chủ nghĩa
            </motion.h1>

            <motion.div variants={fadeUpVariants} className="mt-8 flex items-center gap-4">
              <span className="h-3 w-3 rounded-full bg-[#f3be69] shadow-[0_0_16px_rgba(243,190,105,0.75)]" />
              <span className="h-px flex-1 max-w-xl bg-gradient-to-r from-[#c98c36] via-[#f4c778] to-transparent" />
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="mt-7 max-w-3xl text-lg leading-relaxed text-[#f7d9a4]/95 sm:text-2xl"
              style={{ fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif" }}
            >
              Khái niệm, bản chất và quá trình phát triển
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mt-10">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToNext}
                className="inline-flex items-center gap-3 rounded-full border border-[#ebb261] bg-[linear-gradient(135deg,rgba(117,10,20,0.95),rgba(73,10,28,0.92))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#fde4b7] shadow-[0_12px_30px_rgba(54,8,13,0.36)] transition sm:px-8 sm:text-base"
                type="button"
              >
                Khám phá nội dung
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex h-[440px] w-full max-w-[640px] items-center justify-center sm:h-[520px] lg:h-[680px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-0 rounded-full border border-[#bf7f36]/25" />
              <div className="absolute inset-[8%] rounded-full border border-[#dc9a4b]/45" />
              <div className="absolute inset-[15%] rounded-full border border-[#bb7631]/20 border-dashed" />
              <div className="absolute inset-[24%] rounded-full border border-[#df9f52]/35" />

              <div className="absolute inset-x-[14%] bottom-[17%] h-[30%] rounded-[50%] border border-[#bd7c37]/45 bg-[radial-gradient(circle_at_50%_15%,rgba(141,26,31,0.18),rgba(0,0,0,0)_72%)]" />

              <Spark className="left-[18%] top-[18%]" delay={0.1} />
              <Spark className="right-[16%] top-[8%]" delay={0.6} />
              <Spark className="right-[6%] top-[52%]" delay={1.1} />
              <Spark className="left-[24%] bottom-[6%]" delay={0.4} />
              <Spark className="left-[46%] top-[6%]" delay={0.9} />

              {orbitItems.map((item) => (
                <OrbitalIcon key={item.className} {...item} />
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="absolute left-1/2 top-[17%] flex -translate-x-1/2 flex-col items-center text-[#efb25f]"
              >
                <Building2 className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" strokeWidth={1.2} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="absolute left-1/2 top-[43%] flex w-[72%] -translate-x-1/2 items-end justify-between text-[#efb25f]"
              >
                <Users className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" strokeWidth={1.3} />
                <Users className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36" strokeWidth={1.3} />
                <Users className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" strokeWidth={1.3} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.5 }}
                className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[#efb25f]"
              >
                <Handshake className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52" strokeWidth={1.2} />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,194,96,0.12),transparent_24%),radial-gradient(circle_at_56%_55%,rgba(255,109,36,0.14),transparent_44%)]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden sm:h-48">
          <svg
            className="absolute bottom-0 left-0 h-full w-full"
            viewBox="0 0 1600 260"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M0 180C120 155 190 242 330 230C470 218 516 148 676 154C836 160 926 222 1082 208C1238 194 1366 112 1600 142"
              stroke="rgba(255,118,49,0.75)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.6, delay: 0.35 }}
            />
            <motion.path
              d="M0 208C128 182 256 258 406 248C556 238 646 176 792 182C938 188 1012 244 1168 234C1324 224 1428 162 1600 178"
              stroke="rgba(200,88,60,0.45)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0.25 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 2.8, delay: 0.48 }}
            />
            <motion.path
              d="M0 220C138 196 288 282 454 258C620 234 744 170 888 186C1032 202 1158 268 1306 244C1454 220 1516 190 1600 194"
              stroke="rgba(77,132,255,0.5)"
              strokeWidth="1.6"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 3, delay: 0.62 }}
            />
            <motion.path
              d="M0 238C166 216 286 292 466 272C646 252 734 198 892 206C1050 214 1208 282 1378 262C1476 250 1546 228 1600 220"
              stroke="rgba(63,105,237,0.35)"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0.15 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 3.2, delay: 0.8 }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";
import useSlideDeck from "../../hooks/useSlideDeck";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "14%" : "-14%",
    opacity: 0.2,
    scale: 0.985,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-10%" : "10%",
    opacity: 0,
    scale: 0.99,
  }),
};

const statusLabels = {
  ready: "Ready",
  "reference-pending": "Pending",
  placeholder: "Placeholder",
};

export default function SlideDeck({ slides = [] }) {
  const {
    currentIndex,
    totalSlides,
    direction,
    goNext,
    goPrev,
    goTo,
    isFirst,
    isLast,
  } = useSlideDeck(slides.length);

  const activeSlide = slides[currentIndex];
  const ActiveSlideComponent = activeSlide?.component;
  const counter = `${String(currentIndex + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;

  if (!activeSlide || !ActiveSlideComponent) {
    return null;
  }

  return (
    <main className="relative h-screen overflow-hidden bg-[#13040f] text-[#f7e7c3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(150,25,17,0.34),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(33,74,194,0.2),transparent_26%),linear-gradient(135deg,#27050c_0%,#15040d_48%,#0b122f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(198,69,26,0.22),transparent_52%)]" />

      <div className="relative flex h-full flex-col">
        <header className="pointer-events-none absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-4">
            <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-[#e3af61]/30 bg-[#12030b]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f5d7a0] backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#f4bc6d] shadow-[0_0_12px_rgba(244,188,109,0.9)]" />
              Slide Deck
            </div>

            <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-[#d79957]/25 bg-[#0e0611]/58 px-4 py-2 text-sm text-[#f7e4ba] backdrop-blur-xl">
              <Keyboard className="h-4 w-4 text-[#efb35e]" strokeWidth={1.8} />
              <span className="hidden sm:inline">Use ← → để chuyển slide</span>
              <span className="font-semibold tracking-[0.16em] text-[#ffdeab]">{counter}</span>
            </div>
          </div>
        </header>

        <div className="relative flex-1 overflow-hidden px-2 pb-28 pt-16 sm:px-4 sm:pb-32 sm:pt-20 lg:px-6">
          <div className="relative mx-auto h-full max-w-[1700px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <Motion.section
                key={activeSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full overflow-hidden rounded-[2rem] border border-[#d39a52]/40 bg-[linear-gradient(180deg,rgba(18,4,12,0.82),rgba(8,6,18,0.86))] shadow-[0_24px_80px_rgba(0,0,0,0.42)] ring-1 ring-[#f1c277]/10">
                  <div
                    className={`h-full overscroll-contain ${
                      activeSlide.allowScroll ? "overflow-y-auto" : "overflow-hidden"
                    }`}
                  >
                    <ActiveSlideComponent
                      slide={activeSlide}
                      currentIndex={currentIndex}
                      totalSlides={totalSlides}
                    />
                  </div>
                </div>
              </Motion.section>
            </AnimatePresence>
          </div>
        </div>

        <nav className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1680px] rounded-[1.8rem] border border-[#d39a52]/25 bg-[#12030d]/72 shadow-[0_14px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <div className="overflow-x-auto">
                <div className="flex min-w-max items-center gap-2">
                  {slides.map((slide, index) => {
                    const isActive = index === currentIndex;

                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-current={isActive ? "step" : undefined}
                        className={`rounded-2xl border px-3 py-2 text-left transition sm:px-4 ${
                          isActive
                            ? "border-[#efba6a] bg-[linear-gradient(135deg,rgba(120,15,24,0.92),rgba(62,14,38,0.9))] text-[#fff2ce] shadow-[0_0_28px_rgba(189,93,41,0.2)]"
                            : "border-[#e0ad63]/18 bg-[#ffffff08] text-[#f7d9a2]/82 hover:border-[#e0ad63]/45 hover:bg-[#ffffff0f]"
                        }`}
                      >
                        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#efb764]">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-1 text-sm font-medium sm:text-[0.95rem]">{slide.label}</div>
                        <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#f6d7a4]/68">
                          {statusLabels[slide.status] ?? slide.status}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={isFirst}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition sm:px-5 ${
                    isFirst
                      ? "border-[#ffffff12] bg-[#ffffff08] text-[#9f8b74]"
                      : "border-[#d9a35f]/45 bg-[#ffffff08] text-[#f7dfb2] hover:-translate-y-0.5 hover:bg-[#ffffff10]"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
                  Prev
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={isLast}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition sm:px-5 ${
                    isLast
                      ? "border-[#ffffff12] bg-[#ffffff08] text-[#9f8b74]"
                      : "border-[#efbc6b]/72 bg-[linear-gradient(135deg,rgba(119,11,20,0.98),rgba(62,15,37,0.94))] text-[#fff1ca] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(73,7,14,0.35)]"
                  }`}
                >
                  Next
                  <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}

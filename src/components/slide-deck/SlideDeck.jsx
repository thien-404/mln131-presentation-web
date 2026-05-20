import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Keyboard,
  Minimize,
} from "lucide-react";
import useSlideDeck from "../../hooks/useSlideDeck";
import useFullscreen from "../../hooks/useFullscreen";

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

const BAR_IDLE_MS = 1200;
const TOP_REVEAL_EDGE = 96;
const BOTTOM_REVEAL_EDGE = 128;

function clearIdleTimer(timerRef) {
  if (timerRef.current) {
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }
}

export default function SlideDeck({ slides = [] }) {
  const deckRef = useRef(null);
  const topIdleTimerRef = useRef(null);
  const bottomIdleTimerRef = useRef(null);
  const [isTopBarVisible, setIsTopBarVisible] = useState(false);
  const [isBottomBarVisible, setIsBottomBarVisible] = useState(false);
  const [isTopBarPinned, setIsTopBarPinned] = useState(false);
  const [isBottomBarPinned, setIsBottomBarPinned] = useState(false);

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
  const { isSupported, isFullscreen, toggleFullscreen } = useFullscreen(deckRef);

  const activeSlide = slides[currentIndex];
  const ActiveSlideComponent = activeSlide?.component;
  const counter = `${String(currentIndex + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;
  const fullscreenLabel = isFullscreen ? "Exit Fullscreen" : "Fullscreen";

  const clearTopIdleTimer = useCallback(() => {
    clearIdleTimer(topIdleTimerRef);
  }, []);

  const clearBottomIdleTimer = useCallback(() => {
    clearIdleTimer(bottomIdleTimerRef);
  }, []);

  const scheduleTopHide = useCallback(
    (force = false) => {
      clearTopIdleTimer();

      if (!force && isTopBarPinned) {
        return;
      }

      topIdleTimerRef.current = window.setTimeout(() => {
        setIsTopBarVisible(false);
        topIdleTimerRef.current = null;
      }, BAR_IDLE_MS);
    },
    [clearTopIdleTimer, isTopBarPinned]
  );

  const scheduleBottomHide = useCallback(
    (force = false) => {
      clearBottomIdleTimer();

      if (!force && isBottomBarPinned) {
        return;
      }

      bottomIdleTimerRef.current = window.setTimeout(() => {
        setIsBottomBarVisible(false);
        bottomIdleTimerRef.current = null;
      }, BAR_IDLE_MS);
    },
    [clearBottomIdleTimer, isBottomBarPinned]
  );

  const revealTopBar = useCallback(
    ({ temporary = false } = {}) => {
      clearTopIdleTimer();
      setIsTopBarVisible(true);

      if (temporary && !isTopBarPinned) {
        scheduleTopHide();
      }
    },
    [clearTopIdleTimer, isTopBarPinned, scheduleTopHide]
  );

  const revealBottomBar = useCallback(
    ({ temporary = false } = {}) => {
      clearBottomIdleTimer();
      setIsBottomBarVisible(true);

      if (temporary && !isBottomBarPinned) {
        scheduleBottomHide();
      }
    },
    [clearBottomIdleTimer, isBottomBarPinned, scheduleBottomHide]
  );

  useEffect(() => {
    const revealBars = () => {
      revealTopBar({ temporary: true });
      revealBottomBar({ temporary: true });
    };

    const handlePointerMove = (event) => {
      const isNearTop = event.clientY <= TOP_REVEAL_EDGE;
      const isNearBottom = event.clientY >= window.innerHeight - BOTTOM_REVEAL_EDGE;

      if (isNearTop) {
        revealTopBar();
      } else {
        scheduleTopHide();
      }

      if (isNearBottom) {
        revealBottomBar();
      } else {
        scheduleBottomHide();
      }
    };

    const handleTouchStart = () => {
      revealBars();
    };

    const handleKeyDown = () => {
      revealBars();
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTopIdleTimer();
      clearBottomIdleTimer();
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    clearBottomIdleTimer,
    clearTopIdleTimer,
    revealBottomBar,
    revealTopBar,
    scheduleBottomHide,
    scheduleTopHide,
  ]);

  if (!activeSlide || !ActiveSlideComponent) {
    return null;
  }

  return (
    <main ref={deckRef} className="relative h-screen overflow-hidden bg-[#13040f] text-[#f7e7c3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(150,25,17,0.34),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(33,74,194,0.2),transparent_26%),linear-gradient(135deg,#27050c_0%,#15040d_48%,#0b122f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(198,69,26,0.22),transparent_52%)]" />

      <div className="relative h-full">
        <div className="absolute inset-0 overflow-hidden">
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
              <div
                className={`h-full w-full overscroll-contain ${
                  activeSlide.allowScroll ? "overflow-y-auto" : "overflow-hidden"
                }`}
              >
                <ActiveSlideComponent
                  slide={activeSlide}
                  currentIndex={currentIndex}
                  totalSlides={totalSlides}
                />
              </div>
            </Motion.section>
          </AnimatePresence>
        </div>

        <Motion.header
          initial={false}
          animate={{
            y: isTopBarVisible ? "0%" : "-120%",
            opacity: isTopBarVisible ? 1 : 0,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => {
            clearTopIdleTimer();
            setIsTopBarPinned(true);
            setIsTopBarVisible(true);
          }}
          onMouseLeave={() => {
            setIsTopBarPinned(false);
            scheduleTopHide(true);
          }}
          onFocusCapture={() => {
            clearTopIdleTimer();
            setIsTopBarPinned(true);
            setIsTopBarVisible(true);
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsTopBarPinned(false);
              scheduleTopHide(true);
            }
          }}
          className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-4">
            <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-[#e3af61]/30 bg-[#12030b]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f5d7a0] backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#f4bc6d] shadow-[0_0_12px_rgba(244,188,109,0.9)]" />
              Slide Deck
            </div>

            <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-[#d79957]/25 bg-[#0e0611]/58 px-3 py-2 text-sm text-[#f7e4ba] backdrop-blur-xl sm:px-4">
              <div className="inline-flex items-center gap-3">
                <Keyboard className="h-4 w-4 text-[#efb35e]" strokeWidth={1.8} />
                <span className="hidden sm:inline">Use Left/Right to change slides</span>
                <span className="font-semibold tracking-[0.16em] text-[#ffdeab]">{counter}</span>
              </div>

              <span className="hidden h-5 w-px bg-[#ffffff12] sm:block" />

              <button
                type="button"
                onClick={() => {
                  void toggleFullscreen();
                }}
                disabled={!isSupported}
                aria-pressed={isFullscreen}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition sm:text-sm ${
                  isSupported
                    ? "border-[#e0ab62]/38 bg-[#ffffff08] text-[#fde3b4] hover:-translate-y-0.5 hover:bg-[#ffffff10]"
                    : "border-[#ffffff10] bg-[#ffffff08] text-[#9f8b74]"
                }`}
              >
                {isFullscreen ? (
                  <Minimize className="h-4 w-4 text-[#efb35e]" strokeWidth={1.8} />
                ) : (
                  <Expand className="h-4 w-4 text-[#efb35e]" strokeWidth={1.8} />
                )}
                <span>{isSupported ? fullscreenLabel : "Unavailable"}</span>
              </button>
            </div>
          </div>
        </Motion.header>

        <Motion.nav
          initial={false}
          animate={{
            y: isBottomBarVisible ? "0%" : "110%",
            opacity: isBottomBarVisible ? 1 : 0,
          }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => {
            clearBottomIdleTimer();
            setIsBottomBarPinned(true);
            setIsBottomBarVisible(true);
          }}
          onMouseLeave={() => {
            setIsBottomBarPinned(false);
            scheduleBottomHide(true);
          }}
          onFocusCapture={() => {
            clearBottomIdleTimer();
            setIsBottomBarPinned(true);
            setIsBottomBarVisible(true);
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsBottomBarPinned(false);
              scheduleBottomHide(true);
            }
          }}
          className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:px-6 lg:px-8"
        >
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
        </Motion.nav>
      </div>
    </main>
  );
}

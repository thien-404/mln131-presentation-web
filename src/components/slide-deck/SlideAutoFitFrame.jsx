import { useEffect, useRef, useState } from "react";

export default function SlideAutoFitFrame({ slideId, children }) {
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(0);
  const [fitState, setFitState] = useState({
    scale: 1,
    viewportHeight: 0,
  });

  useEffect(() => {
    const viewportElement = viewportRef.current;
    const contentElement = contentRef.current;

    if (!viewportElement || !contentElement) {
      return undefined;
    }

    const measure = () => {
      rafRef.current = 0;

      const viewportWidth = viewportElement.clientWidth;
      const viewportHeight = viewportElement.clientHeight;

      if (!viewportWidth || !viewportHeight) {
        return;
      }

      const contentWidth = Math.max(contentElement.scrollWidth, contentElement.offsetWidth);
      const contentHeight = Math.max(contentElement.scrollHeight, contentElement.offsetHeight);

      if (!contentWidth || !contentHeight) {
        return;
      }

      const nextScale = Math.min(viewportWidth / contentWidth, viewportHeight / contentHeight, 1);

      setFitState((currentState) => {
        const normalizedScale = Number.isFinite(nextScale) && nextScale > 0 ? nextScale : 1;
        const roundedScale = Math.round(normalizedScale * 1000) / 1000;

        if (
          Math.abs(currentState.scale - roundedScale) < 0.005 &&
          currentState.viewportHeight === viewportHeight
        ) {
          return currentState;
        }

        return {
          scale: roundedScale,
          viewportHeight,
        };
      });
    };

    const scheduleMeasure = () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = window.requestAnimationFrame(measure);
    };

    scheduleMeasure();

    let viewportObserver;
    let contentObserver;

    if (typeof ResizeObserver !== "undefined") {
      viewportObserver = new ResizeObserver(scheduleMeasure);
      contentObserver = new ResizeObserver(scheduleMeasure);

      viewportObserver.observe(viewportElement);
      contentObserver.observe(contentElement);
    }

    window.addEventListener("resize", scheduleMeasure);

    let isMounted = true;

    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          if (isMounted) {
            scheduleMeasure();
          }
        })
        .catch(() => {});
    }

    return () => {
      isMounted = false;

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      viewportObserver?.disconnect();
      contentObserver?.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [slideId]);

  return (
    <div ref={viewportRef} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 top-0 w-full origin-top will-change-transform"
        style={{
          height: fitState.viewportHeight ? `${fitState.viewportHeight}px` : "100%",
          transform: `translateX(-50%) scale(${fitState.scale})`,
        }}
      >
        <div ref={contentRef} className="h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

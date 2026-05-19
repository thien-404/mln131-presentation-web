import { startTransition, useEffect, useEffectEvent, useState } from "react";

export default function useSlideDeck(totalSlides) {
  const slideCount = Math.max(totalSlides, 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (nextIndex) => {
    const clampedIndex = Math.min(Math.max(nextIndex, 0), slideCount - 1);

    if (clampedIndex === currentIndex) {
      return;
    }

    setDirection(clampedIndex > currentIndex ? 1 : -1);
    startTransition(() => {
      setCurrentIndex(clampedIndex);
    });
  };

  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  const handleKeyDown = useEffectEvent((event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const target = event.target;
    const tagName = target?.tagName;
    const isTypingField =
      tagName === "INPUT" || tagName === "TEXTAREA" || target?.isContentEditable;

    if (isTypingField) {
      return;
    }

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goNext();
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goPrev();
    }

    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goTo(slideCount - 1);
    }
  });

  useEffect(() => {
    const onKeyDown = (event) => handleKeyDown(event);

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (currentIndex > slideCount - 1) {
      setCurrentIndex(slideCount - 1);
    }
  }, [currentIndex, slideCount]);

  return {
    currentIndex,
    totalSlides: slideCount,
    direction,
    goNext,
    goPrev,
    goTo,
    isFirst: currentIndex === 0,
    isLast: currentIndex === slideCount - 1,
  };
}

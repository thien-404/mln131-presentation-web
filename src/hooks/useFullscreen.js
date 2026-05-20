import { useEffect, useState } from "react";

function getFullscreenElement() {
  return document.fullscreenElement;
}

function getFullscreenEnabled() {
  return typeof document !== "undefined" && Boolean(document.fullscreenEnabled);
}

export default function useFullscreen(targetRef) {
  const [isSupported, setIsSupported] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const syncFullscreenState = () => {
      const fullscreenElement = getFullscreenElement();
      setIsSupported(getFullscreenEnabled());
      setIsFullscreen(Boolean(fullscreenElement) && fullscreenElement === targetRef.current);
    };

    syncFullscreenState();
    document.addEventListener("fullscreenchange", syncFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, [targetRef]);

  const enterFullscreen = async () => {
    const targetElement = targetRef.current;

    if (!targetElement || !getFullscreenEnabled() || typeof targetElement.requestFullscreen !== "function") {
      return false;
    }

    await targetElement.requestFullscreen();
    return true;
  };

  const exitFullscreen = async () => {
    if (!getFullscreenElement() || typeof document.exitFullscreen !== "function") {
      return false;
    }

    await document.exitFullscreen();
    return true;
  };

  const toggleFullscreen = async () => {
    if (!isSupported) {
      return false;
    }

    if (isFullscreen) {
      return exitFullscreen();
    }

    return enterFullscreen();
  };

  return {
    isSupported,
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}

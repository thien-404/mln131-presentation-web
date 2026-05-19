import { useEffect, useState } from "react";

export default function TopNav({ items = [] }) {
  const [active, setActive] = useState(items?.[0]?.id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0.08 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-50 flex justify-center px-4 py-4">
      <nav
        className={`flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border px-3 py-2 shadow-lg backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-[#d6a25f]/55 bg-[#f5efe5]/90"
            : "border-[#d8a15d]/35 bg-[#2d0918]/45"
        }`}
      >
        {items.map((it) => {
          const isActive = active === it.id;

          return (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? isScrolled
                    ? "border border-[#d5a257] bg-white text-[#551019] shadow"
                    : "border border-[#f0be72]/65 bg-[#6f1020]/70 text-[#ffe1af] shadow-[0_0_20px_rgba(171,78,29,0.15)]"
                  : isScrolled
                    ? "text-[#6c4b2e] hover:bg-white/70 hover:text-[#2a1610]"
                    : "text-[#f6d3a3]/88 hover:bg-[#ffffff14] hover:text-[#fff0cf]"
              }`}
              type="button"
            >
              {it.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

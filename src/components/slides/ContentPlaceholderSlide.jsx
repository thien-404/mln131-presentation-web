import { motion as Motion } from "framer-motion";
import { ImagePlus, LayoutTemplate, PanelsTopLeft, ScanSearch } from "lucide-react";

export default function ContentPlaceholderSlide({ slide, currentIndex, totalSlides }) {
  return (
    <section className="relative min-h-full overflow-hidden px-6 py-8 text-[#f5ead2] sm:px-10 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(150,32,25,0.16),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(38,87,198,0.16),transparent_20%),linear-gradient(180deg,rgba(18,6,13,0.08),rgba(10,10,20,0.18))]" />
      <div className="relative mx-auto flex min-h-full max-w-[1480px] flex-col gap-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d8a25b]/28 bg-[#ffffff08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#efba6c]">
              Slide {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </div>
            <h2
              className="mt-5 text-4xl font-bold leading-tight text-[#fff0cd] sm:text-5xl"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {slide.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#f2dab0]/84 sm:text-lg">
              {slide.summary}
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-[#d8a25b]/24 bg-[#110711]/54 px-5 py-4 text-sm text-[#f8ddb1]/82 backdrop-blur-xl">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#efba6c]">
              {slide.status}
            </div>
            <div className="mt-2">Reference asset: {slide.referenceAsset ?? "awaiting-user-image"}</div>
            <div className="mt-1">Viewport mode: auto-fit</div>
          </div>
        </div>

        <div className="grid flex-1 gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-[#d8a25b]/24 bg-[#ffffff08] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
          >
            <div className="rounded-[1.6rem] border border-dashed border-[#f2c27a]/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.3rem] border border-[#ffffff10] bg-[radial-gradient(circle_at_top,rgba(132,22,20,0.18),transparent_34%),rgba(10,10,18,0.42)] text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e4b56a]/30 bg-[#6f1520]/34 text-[#f2bc67]">
                  <ImagePlus className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#fff0cd]">Chờ ảnh reference từ bạn</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#f4dbb2]/76 sm:text-base">
                  Slide shell này đã sẵn structure, animation frame và vùng trình bày. Khi có ảnh mẫu,
                  chỉ cần thay component visual mà không đổi engine.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-[#e3af64]/18 bg-[#ffffff08] p-4">
                <div className="flex items-center gap-3 text-[#f2bc67]">
                  <PanelsTopLeft className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Deck contract</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#f6ddaf]/78">
                  id, label, component, allowScroll, status, referenceAsset
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-[#e3af64]/18 bg-[#ffffff08] p-4">
                <div className="flex items-center gap-3 text-[#f2bc67]">
                  <ScanSearch className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Viewport fit</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#f6ddaf]/78">
                  Deck hiện tại ưu tiên auto-fit để slide nằm gọn trong khung trình chiếu thay vì kéo
                  nội dung theo chiều dọc.
                </p>
              </div>
            </div>
          </Motion.div>

          <div className="grid gap-4 self-start">
            {slide.placeholderPoints?.map((point, index) => (
              <Motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.58, delay: 0.08 * index }}
                className="rounded-[1.5rem] border border-[#d8a25b]/20 bg-[#ffffff08] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#e3af64]/28 bg-[#5f101c]/34 text-[#f2bc67]">
                    <LayoutTemplate className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#efba6c]">
                      Placeholder {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-2 text-base leading-7 text-[#f5e0bb]/86">{point}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

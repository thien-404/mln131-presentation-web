import { motion as Motion } from "framer-motion";
import { BrainCircuit, Clock3, ListChecks } from "lucide-react";

const futureQuizItems = [
  "Ngân hàng câu hỏi mới sẽ được viết lại theo đúng chủ đề dân chủ và dân chủ xã hội chủ nghĩa.",
  "Flow quiz sẽ cắm vào slide cuối này thay vì route riêng, giữ cùng deck navigation experience.",
  "Các trạng thái timer, feedback, kết quả và scoreboard sẽ được làm ở pha nội dung tiếp theo.",
];

export default function QuizPlaceholderSlide({ currentIndex, totalSlides }) {
  return (
    <section className="relative min-h-full overflow-hidden px-6 py-8 text-[#f5ead2] sm:px-10 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(167,43,18,0.18),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(57,94,222,0.2),transparent_24%),linear-gradient(180deg,rgba(17,7,15,0.04),rgba(13,12,28,0.22))]" />
      <div className="relative mx-auto flex min-h-full max-w-[1460px] flex-col justify-between gap-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#d8a25b]/28 bg-[#ffffff08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#efba6c]">
            Slide {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </div>
          <h2
            className="mt-6 text-4xl font-bold leading-tight text-[#fff0cd] sm:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Quiz sẽ được nối ở pha sau
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#f2dab0]/84 sm:text-lg">
            Slide này giữ chỗ cho phần luyện tập cuối deck. Engine điều hướng đã sẵn sàng, nên lúc có
            nội dung mới chỉ cần thay component mà không đổi flow tổng.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62 }}
            className="rounded-[2rem] border border-[#d8a25b]/24 bg-[linear-gradient(180deg,rgba(111,18,22,0.22),rgba(18,8,18,0.42))] p-6 shadow-[0_24px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e3af64]/30 bg-[#ffffff0c] text-[#f2bc67]">
                <BrainCircuit className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#efba6c]">
                  Placeholder contract
                </div>
                <p className="mt-3 text-base leading-7 text-[#f8dfb7]/84">
                  Giữ id `quiz-placeholder` để sau này swap sang quiz flow thật mà không phải đổi lại
                  manifest hay thứ tự deck.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#e3af64]/18 bg-[#ffffff08] p-4">
                <div className="flex items-center gap-3 text-[#f2bc67]">
                  <Clock3 className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Stateful flow</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#f6ddaf]/78">
                  Timer, step feedback và result screen sẽ cắm vào đây khi quiz content sẵn sàng.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#e3af64]/18 bg-[#ffffff08] p-4">
                <div className="flex items-center gap-3 text-[#f2bc67]">
                  <ListChecks className="h-5 w-5" strokeWidth={1.8} />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Same deck</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#f6ddaf]/78">
                  Quiz sẽ chạy ngay trong deck, không quay về mô hình quiz route cũ.
                </p>
              </div>
            </div>
          </Motion.div>

          <div className="grid gap-4 self-start">
            {futureQuizItems.map((item, index) => (
              <Motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.58, delay: 0.08 * index }}
                className="rounded-[1.5rem] border border-[#d8a25b]/20 bg-[#ffffff08] p-5 shadow-[0_18px_34px_rgba(0,0,0,0.18)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#efba6c]">
                  Quiz phase {index + 1}
                </div>
                <p className="mt-2 text-base leading-7 text-[#f5e0bb]/86">{item}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

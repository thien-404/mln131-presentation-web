import SlideDeckOpening from "../components/slides/OpeningSlide";
import DemocracyConceptSlide from "../components/slides/DemocracyConceptSlide";
import MarxLeninDemocracySlide from "../components/slides/MarxLeninDemocracySlide";
import CentralizedDemocracySlide from "../components/slides/CentralizedDemocracySlide";
import ContentPlaceholderSlide from "../components/slides/ContentPlaceholderSlide";
import QuizPlaceholderSlide from "../components/slides/QuizPlaceholderSlide";

export const slideManifest = [
  {
    id: "opening",
    label: "Mở đầu",
    component: SlideDeckOpening,
    allowScroll: false,
    status: "ready",
    referenceAsset: "opening-poster-v1",
  },
  {
    id: "content-01",
    label: "Khái niệm",
    component: DemocracyConceptSlide,
    allowScroll: false,
    status: "ready",
    referenceAsset: "democracy-concept-v1",
  },
  {
    id: "content-02",
    label: "Mác - Lênin",
    component: MarxLeninDemocracySlide,
    allowScroll: false,
    status: "ready",
    referenceAsset: "marx-lenin-democracy-v1",
  },
  {
    id: "content-03",
    label: "Tập trung dân chủ",
    component: CentralizedDemocracySlide,
    allowScroll: false,
    status: "ready",
    referenceAsset: "centralized-democracy-v1",
  },
  {
    id: "content-04",
    label: "Slide 05",
    component: ContentPlaceholderSlide,
    allowScroll: false,
    status: "reference-pending",
    referenceAsset: null,
    title: "Slide nội dung 05",
    summary:
      "Slide shell cuối trước quiz placeholder, phù hợp cho tổng kết hoặc nhịp dẫn sang phần luyện tập sau này.",
    placeholderPoints: [
      "Có thể dùng như recap, bridge slide hoặc conclusion tùy bộ ảnh bạn gửi.",
      "Status và referenceAsset được giữ ngay trên manifest để quản lý tiến độ từng slide.",
      "Deck hiện tại ưu tiên auto-fit để mọi slide nằm gọn trong một khung trình chiếu thống nhất.",
    ],
  },
  {
    id: "quiz-placeholder",
    label: "Quiz",
    component: QuizPlaceholderSlide,
    allowScroll: false,
    status: "placeholder",
    referenceAsset: null,
  },
];

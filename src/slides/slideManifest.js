import SlideDeckOpening from "../components/slides/OpeningSlide";
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
    label: "Slide 02",
    component: ContentPlaceholderSlide,
    allowScroll: true,
    status: "reference-pending",
    referenceAsset: null,
    title: "Slide nội dung 02",
    summary:
      "Khung slide đã sẵn cho reference tiếp theo. Layout này ưu tiên thay nhanh visual và copy khi bạn gửi ảnh mẫu kế tiếp.",
    placeholderPoints: [
      "Giữ vùng visual lớn để bám đúng composition từ ảnh reference bạn sẽ gửi.",
      "Cho phép copy dài hơn mà vẫn scroll trong slide, không phá fullscreen deck.",
      "Thể hiện rõ metadata để nhóm slide sau thay thế tuần tự mà không đổi navigation.",
    ],
  },
  {
    id: "content-02",
    label: "Slide 03",
    component: ContentPlaceholderSlide,
    allowScroll: true,
    status: "reference-pending",
    referenceAsset: null,
    title: "Slide nội dung 03",
    summary:
      "Shell thứ hai dùng cùng contract nhưng có thể đổi hoàn toàn visual direction khi có ảnh mới, miễn vẫn giữ slide manifest và hybrid scroll.",
    placeholderPoints: [
      "Có thể swap sang timeline, infographic hoặc split layout tùy theo ảnh reference.",
      "Phần container và motion đã tách khỏi nội dung nên không cần sửa deck engine.",
      "Thích hợp cho slide có nhiều chú thích hoặc các khối so sánh dài hơn.",
    ],
  },
  {
    id: "content-03",
    label: "Slide 04",
    component: ContentPlaceholderSlide,
    allowScroll: true,
    status: "reference-pending",
    referenceAsset: null,
    title: "Slide nội dung 04",
    summary:
      "Shell này giữ chỗ cho một slide thiên về nhịp trình bày hoặc trọng tâm khái niệm, vẫn nằm trong một deck thống nhất về màu và điều hướng.",
    placeholderPoints: [
      "Có thể nâng mức motion hoặc giảm motion tùy reference mà không đổi API.",
      "Các thẻ placeholder đang mô phỏng các block content sẽ được replace trực tiếp.",
      "Dễ cắm thêm hình, icon, data callout hoặc footnote nếu slide thật yêu cầu.",
    ],
  },
  {
    id: "content-04",
    label: "Slide 05",
    component: ContentPlaceholderSlide,
    allowScroll: true,
    status: "reference-pending",
    referenceAsset: null,
    title: "Slide nội dung 05",
    summary:
      "Slide shell cuối trước quiz placeholder, phù hợp cho tổng kết hoặc nhịp dẫn sang phần luyện tập sau này.",
    placeholderPoints: [
      "Có thể dùng như recap, bridge slide hoặc conclusion tùy bộ ảnh bạn gửi.",
      "Status và referenceAsset được giữ ngay trên manifest để quản lý tiến độ từng slide.",
      "Không phụ thuộc vào data legacy nên nội dung mới có thể viết lại sạch theo chủ đề chuẩn.",
    ],
  },
  {
    id: "quiz-placeholder",
    label: "Quiz",
    component: QuizPlaceholderSlide,
    allowScroll: true,
    status: "placeholder",
    referenceAsset: null,
  },
];

import SlideDeckOpening from "../components/slides/OpeningSlide";
import DemocracyConceptSlide from "../components/slides/DemocracyConceptSlide";
import MarxLeninDemocracySlide from "../components/slides/MarxLeninDemocracySlide";
import CentralizedDemocracySlide from "../components/slides/CentralizedDemocracySlide";
import HoChiMinhDemocracySlide from "../components/slides/HoChiMinhDemocracySlide";
import SocialistDemocracySlide from "../components/slides/SocialistDemocracySlide";
import PartyAwarenessSlide from "../components/slides/PartyAwarenessSlide";
import PrimitiveSocietyDemocracySlide from "../components/slides/PrimitiveSocietyDemocracySlide";

export const slideManifest = [
  {
    id: "opening",
    label: "Mở đầu",
    component: SlideDeckOpening,
    allowScroll: true,
    status: "ready",
    referenceAsset: "opening-poster-v1",
  },
  {
    id: "content-01",
    label: "Khái niệm",
    component: DemocracyConceptSlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "democracy-concept-v1",
  },
  {
    id: "content-02",
    label: "Mác - Lênin",
    component: MarxLeninDemocracySlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "marx-lenin-democracy-v1",
  },
  {
    id: "content-03",
    label: "Tập trung dân chủ",
    component: CentralizedDemocracySlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "centralized-democracy-v1",
  },
  {
    id: "content-04",
    label: "Hồ Chí Minh",
    component: HoChiMinhDemocracySlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "ho-chi-minh-democracy-v1",
  },
  {
    id: "content-05",
    label: "Xã hội chủ nghĩa",
    component: SocialistDemocracySlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "socialist-democracy-v1",
  },
  {
    id: "content-06",
    label: "Nhận thức Đảng",
    component: PartyAwarenessSlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "party-awareness-v1",
  },
  {
    id: "content-07",
    label: "Nguyên thủy",
    component: PrimitiveSocietyDemocracySlide,
    allowScroll: true,
    status: "ready",
    referenceAsset: "primitive-society-democracy-v1",
  },
];

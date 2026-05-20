import SlideDeck from "../components/slide-deck/SlideDeck";
import { slideManifest } from "../slides/slideManifest";

export default function NationalConsciousnessFlow() {
  return <SlideDeck slides={slideManifest} />;
}

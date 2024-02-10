import Text from "@/ui/home/Text";
import Cards from "@/ui/home/cards";
import MainCarousel from "@/ui/home/homeCarousel";

export default function Home() {
  return (
    <>
      <div className="d-block container mt-5 bg-secondary">
        <MainCarousel />
        <Cards />
      </div>
      <div>
        <Text />
      </div>
    </>
  );
}

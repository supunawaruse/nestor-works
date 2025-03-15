import Carousel from "@/components/homeComponents/carousel";
import DetailsSection from "@/components/homeComponents/detailsSection";
import WatchesSection from "@/components/homeComponents/watchesSection";
import CategorySection from "@/components/homeComponents/categorySection";
import NewArrivalSection from "@/components/homeComponents/newArrivalSection";
import BrandsSection from "@/components/homeComponents/brandsSection";
import SecondBannerSection from "@/components/homeComponents/secondBannerSection";

export default function Home() {
  return (
    <div>
      <Carousel />
      <DetailsSection />
      <WatchesSection />
      <SecondBannerSection />
      {/* <FirstBannerSection /> */}
      <NewArrivalSection />
      <CategorySection />
      <BrandsSection />
      {/* <BlogsSection /> */}
    </div>
  );
}

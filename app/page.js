import Carousel from "@/components/homeComponents/carousel";
import DetailsSection from "@/components/homeComponents/detailsSection";
import WatchesSection from "@/components/homeComponents/watchesSection";
import FirstBannerSection from "@/components/homeComponents/firstBannerSection";
import CategorySection from "@/components/homeComponents/categorySection";
import NewArrivalSection from "@/components/homeComponents/newArrivalSection";
import BrandsSection from "@/components/homeComponents/brandsSection";

export default function Home() {
  return (
    <div>
      <Carousel />
      <DetailsSection />
      <WatchesSection />
      <FirstBannerSection />
      <CategorySection />
      <NewArrivalSection />
      <BrandsSection />
      {/* <SecondBannerSection /> */}
      {/* <BlogsSection /> */}
    </div>
  );
}

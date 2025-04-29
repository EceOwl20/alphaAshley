import CookiePopup from "./cookies/components/CookiePopup";
import Banner from "./Homepage/Banner";
import BlogSection from "./Homepage/BlogSection";
import GallerySection from "./Homepage/GallerySection";
import Location from "./Homepage/Location";
import PersonCarousel from "./Homepage/PersonCarousel";
import Section2 from "./Homepage/Section2";
import Videos from "./Homepage/Videos";
import VideoSection from "./Homepage/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-[#f7f7f7]">
     <Banner/>
     <Section2/>
     <GallerySection/>
     <Location/>
     <PersonCarousel/>
     <VideoSection/>
     <Videos/>
     <BlogSection/>
    </div>
  );
}

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import ClubSection from "@/components/ClubSection";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <EventsSection />
      <ClubSection />
      <GallerySection />
      <Navigation />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import EliteAffiliations from "@/components/home/EliteAffiliations";
import BespokeProcess from "@/components/home/BespokeProcess";
import VettingSection from "@/components/home/VettingSection";
import SuccessMetrics from "@/components/home/SuccessMetrics";
import MatchmakerProfiles from "@/components/home/MatchmakerProfiles";
import DateConcierge from "@/components/home/DateConcierge";
import FullWidthImage from "@/components/home/FullWidthImage";
import MarriageCounters from "@/components/home/MarriageCounters";
import BlogInsights from "@/components/home/BlogInsights";
import AnonymityGuarantee from "@/components/home/AnonymityGuarantee";
import CoupleReviews from "@/components/home/CoupleReviews";
import CTAFooter from "@/components/home/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EliteAffiliations />
      <BespokeProcess />
      <VettingSection />
      <SuccessMetrics />
      <MatchmakerProfiles />
      <DateConcierge />
      <FullWidthImage />
      <MarriageCounters />
      <BlogInsights />
      <AnonymityGuarantee />
      <CoupleReviews />
      <CTAFooter />
    </div>
  );
};

export default Index;

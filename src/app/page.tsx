import HeroSection from "@/components/home/HeroSection";
import GrowthDrivers from "@/components/home/GrowthDrivers";
import RetailEvolution from "@/components/home/RetailEvolution";
import RetailTransformation from "@/components/home/RetailTransformation";
import EmpoweringCommunities from "@/components/home/EmpoweringCommunities";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* All sections at full width */}
      <main className="flex-1">
        <HeroSection />
        <EmpoweringCommunities />
        <RetailEvolution />
        <GrowthDrivers />
        <RetailTransformation />
      </main>
    </div>
  );
}
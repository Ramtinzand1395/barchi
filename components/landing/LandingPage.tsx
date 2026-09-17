import { DownloadCTA, Footer, SupplierCTA } from "./BottomSections";
import { Header } from "./Header";
import { Hero } from "./Hero";
import {
  HowItWorks,
  IndustriesAndFaq,
  ProblemSolution,
  PurchaseShortcuts,
  SupplierShowcase,
} from "./CoreSections";

export function LandingPage() {
  return (
    <main className="landing-page">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <SupplierShowcase />
      <PurchaseShortcuts />
      <SupplierCTA />
      <IndustriesAndFaq />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
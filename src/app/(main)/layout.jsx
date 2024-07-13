import About from "@/components/About";
import HeroSection from "@/components/HeroSection";

export default function layout({ children }) {
  return (
    <main>
      <HeroSection />
      <About />
      {children}
    </main>
  );
}

import Navigation from "./navigation";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ExperienceSection from "./experience-section";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import EducationSection from "./education-section";

function scrollToSection(sectionId: string) {
  if (typeof window !== "undefined") {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation onScrollToSection={scrollToSection} />
      <main>
        <HeroSection onScrollToSection={scrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  );
}

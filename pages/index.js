import AboutSection from "../components/AboutSection";
import { aboutContent, projects } from "../components/AboutSection/Data";
import Contact from "../components/Contact";
import ProjectSection from "../components/ProjectSection";
import TopSection from "../components/TopSection";



export default function myApp() {
  return (
    <div>
      <TopSection />
      <AboutSection {...aboutContent} />
      <ProjectSection {...projects} />
      <Contact />
    </div>
  );
}

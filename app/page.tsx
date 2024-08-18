import About from "@/components/sub/about";
import Contact from "@/components/sub/contact";
import Experience from "@/components/sub/experience";
import Intro from "@/components/sub/intro";
import Projects from "@/components/sub/projects";
import SectionDivider from "@/components/sub/section-divider";
import Skills from "@/components/sub/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

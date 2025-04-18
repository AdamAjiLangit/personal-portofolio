import React from 'react';
import Intro from '@/components/sub/pages/Homepage/intro';
import SectionDivider from '@/components/sub/section-divider';
import About from '@/components/sub/pages/Homepage/about';
import Projects from '@/components/sub/pages/Homepage/projects';
import Skills from '@/components/sub/pages/Homepage/skills';
import Experience from '@/components/sub/pages/Homepage/experience';
import Contact from '@/components/sub/pages/Homepage/contact';

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

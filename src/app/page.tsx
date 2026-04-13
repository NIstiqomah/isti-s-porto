import About from "@/components/sections/About"
import Contact from "@/components/sections/Contacts"
import Hero from "@/components/sections/Hero"
import Navigation from "@/components/sections/Navigation"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import TechStack from "@/components/sections/TechStack"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      <TechStack />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </main>
  )
}
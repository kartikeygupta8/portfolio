import { Navigation } from '@/components/layout/Navigation'
import { Hero }       from '@/components/sections/Hero'
import { Ticker }     from '@/components/sections/Ticker'
import { Projects }   from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Philosophy } from '@/components/sections/Philosophy'
import { Skills }     from '@/components/sections/Skills'
import { About }      from '@/components/sections/About'
import { Contact }    from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <Ticker />
      <main>
        {/* Fixed hero overlay — lifts away as user scrolls */}
        <Hero />
        {/* Spacer matches hero height so content starts right behind it */}
        <div style={{ height: '100svh' }} />
        <Projects />
        <Experience />
        <Philosophy />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  )
}

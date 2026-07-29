import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
// run with npm run dev
// google glb 3d models for 3d models on website sketch fab
// npx gltfjsx optimized-room.glb
// sketch fab lets you make your own models?
//  maybe you can put in blender ones?
// then the file you get in glt format you convert using command above ^^^
const App = () => {
  return (
    <>

      <NavBar />
      <Hero />
      <LogoSection />
      <ShowcaseSection />
      {/* <FeatureCards /> */}
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
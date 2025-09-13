import { useState } from 'react'

import Header from './Components/Header'
import Hero from './Components/Hero'
import AnimatedTextSection from './Components/Animated-Text-Section'
import BotCollectionSection from './Components/BotCollection'
import WhyChooseUs from './Components/WhyChoseUs'
import Feedbacks from './Components/Feedbacks'
import HowItWorks from './Components/HowItWorks'
import Footer from './Components/Footer'

import useRevealOnScroll from "./Scripts/Reveal";

function App() {
  useRevealOnScroll();

  return (
    <div>
      <Header />
      <Hero />
      <AnimatedTextSection />
      <BotCollectionSection />
      <WhyChooseUs />
      <Feedbacks />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default App
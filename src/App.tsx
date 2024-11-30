import Hero from './components/page_sections/Hero';
import WhyUs from './components/page_sections/WhyUs';
import Features from './components/page_sections/Features';
import Services from './components/page_sections/Services';
import Pricing from './components/page_sections/Pricing';

const App = () => {
  const imageVariants = {
    animate: {
      rotate: ['-5deg', '5deg', '-5deg'],
    }
  };
  return (
    <main>
      <Hero imageVariants={imageVariants} />
      <WhyUs />
      <Features />
      <Services />
      <Pricing />
    </main>
  )
}

export default App

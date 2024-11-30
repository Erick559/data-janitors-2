import {motion} from 'framer-motion'
import PrimaryButton from '../PrimaryButton'
import FloatingBubbles from '../FloatingBubble'
import FloatingStars from '../FloatingStars'
import HeroImages from '../HeroImages'

import backgroundImage from '../../image-assets/hero-image.webp'
import Soap from '../../image-assets/soap.webp'
import Glove from '../../image-assets/glove.webp'
import Brush from '../../image-assets/brush.webp'
import Mop from '../../image-assets/mop.webp'
interface Hero {
    imageVariants:{}
};

const Hero = ({imageVariants}:Hero) => {
  const sweepVariants = {
    animate: {
      rotate: ['-3deg', '3deg', '-3deg'],
    }
  };
    
  return (
    <section id="hero" className="hero lg:min-h-screen overflow-hidden relative">
    <main className='h-full py-[150px] px-3 flex flex-col items-center justify-center md:justify-start gap-10 md:gap-24'>
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring", bounce:0.5, duration:1,delay:2}} className="flex w-full justify-center z-[1]">
        <motion.h1 animate={{rotate:['-3deg','3deg','-3deg']}} transition={{duration:1,repeat:Infinity,repeatDelay:10 }} className="font-Rubik text-[#fc472e] leading-[90px] md:leading-[170px] xl:leading-[220px] text-center tracking-[5px] md:tracking-[10px] md:-rotate-[5.77deg] font-black main-header">DATA JANITORS</motion.h1>
      </motion.div>

      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring", bounce:0.5, duration:1,delay:2}} className="flex flex-col md:flex-row justify-center w-full gap-3 z-10">
        <PrimaryButton type="primary" className="px-7 py-6 text-[16px] rounded-xl shadow-sm z-[1]">
          Signup to our Wishlist
        </PrimaryButton>

        <PrimaryButton type="ghost" className="px-7 py-6 text-[16px] rounded-xl shadow-sm z-[1]">
          Schedule Free Consultation
        </PrimaryButton>
      </motion.div>


      <div className='absolute inset-0'>
        <FloatingBubbles />
        <FloatingStars size={25} />
        <HeroImages 
          src={Soap} 
          alt='A pink soap floating at the top right of the screen resembling clean data from Data janitors' 
          className='absolute top-0 right-0 w-fluid-image z-[1]' 
          variants={imageVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity}} 
        />

        <HeroImages 
          src={Glove} 
          alt='A cleaning glove at the bottom left of the screen resembling how hands on and deep Data Janitors are when it comes to cleaning data.' 
          className='absolute bottom-0 -left-10 md:bottom-10 md:left-0 z-[1] w-fluid-image-small' 
          variants={sweepVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity,delay:3,repeatDelay:10}} 
        />

        <HeroImages 
          src={Brush} 
          alt='A cleaning brush at the bottom right of the screen resembling how hands on and deep Data Janitors are when it comes to cleaning data.' 
          className='absolute -right-20 -bottom-10 md:right-0 z-[1] w-fluid-image' 
          variants={sweepVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity,delay:7,repeatDelay:5}} 
        />

        <div className="absolute top-0 left-0 z-0">
          <motion.img width={500} height={500} loading='lazy' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:4, type:"spring", bounce:0.5,}} src={Mop} alt="A mop showcasing the cleaning abilities of data janitors."  className='w-fluid-image'/>
        </div>
      </div>
    </main>
    <div className='absolute inset-0 w-full h-full -z-10'>
      <img loading='eager' src={backgroundImage} alt="Data Janitors background image." className='w-full h-full object-cover' width={1700}  height={1000}/>
    </div>
  </section>  )
}

export default Hero

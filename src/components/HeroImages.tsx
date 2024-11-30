import { motion } from "framer-motion"

interface HeroImages {
    className:string,
    src:string,
    variants?:{},
    animate?:string,
    transition?:{},
    alt:string,
}

const HeroImages = ({className,src,alt,animate,variants,transition}:HeroImages) => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:4,type:"spring",bounce:0.5}}>
      <motion.img loading="lazy" src={src} alt={alt} className={`${className}`} animate={animate} variants={variants} transition={transition} />
    </motion.div>
  )
}

export default HeroImages

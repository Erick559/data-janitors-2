import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Sparkles from '../image-assets/sparkles.webp'


interface FloatingStars {
  size: number;
}

const FloatingStars = ({size}:FloatingStars) => {
  const stars = useMemo(() => {
    return Array.from({ length: size }, (_, index) => ({
      id: index,
      size: Math.random() * 10 + 40,
      delay: Math.random() * 50, 
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <>
        {stars.map((stars) => (
            <motion.img
            key={stars.id}
            initial={{ 
                opacity: 0,
                scale:0,
            }}
            src={Sparkles}
            alt='Sparkles highlighting the clean data Data janitors offer.'
            animate={{
                opacity: [0.7, 1, 0.8],
                scale: [0, 0.8, 0],
                filter: 'blur(1px) brightness(350%)'
            }}
            transition={{
                duration: 1.5,
                delay: stars.delay,
                repeat: Infinity,
                repeatDelay:stars.delay,
                ease: 'easeInOut',
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            className='pointer-events-none'
            style={{
                position: 'absolute',
                width: `${stars.size}px`,
                height: `${stars.size}px`,
                top: `${stars.top}%`,
                left: `${stars.left}%`,
            }}
            />
        ))}
    </>
  );
};

export default FloatingStars;
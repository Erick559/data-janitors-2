import {motion} from 'framer-motion';
import PrimaryButton from '../PrimaryButton';
import FloatingStars from '../FloatingStars';

interface CallToAction{
    imageStyling:string,
    title:string,
    titleDescription?:string,
    src:string,
    alt:string,
    description:string,
    primaryButton:string,
    secondPrimaryButton?:string,
    animated?:boolean,
    variant?:{}
}

const CallToAction = ({imageStyling,src,alt,title,titleDescription,description,primaryButton,secondPrimaryButton,animated,variant}:CallToAction) => {
  return (
    <section id="what-we-do" className="bg-gradient-to-t from-[#252C75] to-[#709EFE] p-12 md:py-16 md:px-5 lg:px-10 relative overflow-hidden">
    <main className="flex flex-col md:items-center md:flex-row lg:px-14 md:justify-center md:gap-4 lg:gap-6">
      <div className="w-full relative flex justify-center">
        {!animated ? 
            <img width={1500} height={1500} className={`${imageStyling} z-10`} src={src} alt={alt} />

        :
            <motion.img variants={variant} animate='animate' transition={{ duration: 5, repeat:Infinity, ease: 'linear' }} width={1500} height={1500} className={`${imageStyling} z-10`} src={src} alt={alt} />    
        }
        <FloatingStars size={10} />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
            {titleDescription ? 
                <p className='uppercase text-[#E9D7FE] tracking-[5px] font-bold text-xs'>{titleDescription}</p>
            : null}
          <h1 className="secondary-header text-4xl sm:text-4xl md:text-5xl">{title}</h1>
        </div>
        <div>
          <p className="text-[#E9D7FE] text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <PrimaryButton type="primary" className="py-5 text-[16px] rounded-xl">{primaryButton}</PrimaryButton>
          {secondPrimaryButton ? 
            <PrimaryButton type="ghost" className="py-5 text-[16px] rounded-xl">{secondPrimaryButton}</PrimaryButton>
          :
            null
          }
        </div>
      </div>
    </main>
  </section>
  )
}

export default CallToAction

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Mockup from '../../image-assets/mockup.webp'
import ServiceItem from '../ServiceItem'


const Services = () => {
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: false, amount: 0.2 })

  const services = [
    {
      title: "Data Cleaning",
      description: "Describe your data needs in plain English, and watch our AI make it happen."
    },
    {
      title: "Data Cleaning",
      description: "Describe your data needs in plain English, and watch our AI make it happen."
    },
    {
      title: "Data Cleaning", 
      description: "Describe your data needs in plain English, and watch our AI make it happen."
    }
  ]

  return (
    <section className="min-h-screen overflow-hidden p-12 md:pb-16 md:px-5 lg:px-10 relative">
      <main className="p-5 md:px-5 lg:px-20 flex flex-col gap-20 min-h-screen">
        <div className="xl:pt-40 flex flex-col gap-8">
          <div className="flex flex-col justify-center gap-6 max-w-[550px]">
            <div>
              <h1 className="primary-header text-4xl sm:text-5xl text-center">Tech-powered Clean</h1>
            </div>
            <motion.div 
              ref={servicesRef}
              className={`flex flex-col gap-8 border-[#72A0FE] relative`}
              style={{ 
                borderLeftWidth: '4px',
                borderLeftStyle: 'solid'
              }}
            >
              {/* Animated Border */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#72A0FE]"
                initial={{ height: 0 }}
                animate={{ 
                  height: isInView ? '100%' : 0,
                  transition: { 
                    duration: 1, 
                    ease: "easeInOut" 
                  }
                }}
              />

              {services.map((service, index) => (
                <ServiceItem 
                  key={index}
                  title={service.title}
                  description={service.description}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          </div>
          <div className="block h-full xl:absolute xl:top-24 xl:-right-56">
            <div className="w-full h-full">
              <img className="mockup-image" src={Mockup} alt="model of a laptop" />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Services
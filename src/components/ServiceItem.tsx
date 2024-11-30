import { motion } from 'framer-motion'

interface ServiceItem {
    title:string
    description:string
    isInView:boolean
}

const ServiceItem = ({ title, description, isInView }:ServiceItem) => {
    return (
      <motion.div 
        className={`p-5 relative`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : -20 
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-bold text-[#252C75]">{title}</h1>
        <p className="text-lg">{description}</p>
      </motion.div>
    )
  }

export default ServiceItem

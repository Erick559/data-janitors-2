interface FeatureCard {
    title:string
    description:string
    src:string
    alt:string
    orderImage?:string
    orderText?:string
}
const FeatureCard = ({title,description,src,alt,orderImage,orderText}:FeatureCard) => {
  return (
    <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full max-w-[950px]">
            <div className={`text-center md:text-left flex flex-col items-center md:items-start gap-4 ${orderText}`}>
                <h1 className="primary-header text-3xl sm:text-4xl z-5">{title}</h1>
                <p className="text-lg w-[30ch]">{description}</p>
            </div>
            <img width={500} height={500} className={`w-[350px] h-[320px] lg:w-[380px] lg:h-[350px] ${orderImage}`} src={src} alt={alt}/>
        </div>
    </div>
  )
}

export default FeatureCard

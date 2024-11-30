import SoapBubbles from '../image-assets/soap-bubble.webp'

interface staticBubble {
    className: string;
    imageStyling?: string;
}

const StaticBubble = ({className,imageStyling}:staticBubble) => {
  return (
    <div className={`absolute -z-20 w-[150px] md:w-[300px] ${className}`}>
        <img width={500} height={500} src={SoapBubbles} alt="Purple soap bubbles" className={`${imageStyling}`} />
    </div>
  )
}

export default StaticBubble

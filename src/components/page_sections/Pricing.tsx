import PriceCards from "../PriceCards";
import StaticBubble from "../staticBubble";

import SoapBubblePattern from '../../image-assets/soap-bubble-pattern.webp'

const Pricing = () => {
    const basicFeatures = ['Access to basic features','Basic reporting + analytics', 'Up to 10 individual users', '20GB individual data', 'Basic chat support', 'Attend Events', 'Automatic updates', 'Backup your account', 'Audit log and notes', 'Feature request'];
    const businessFeatures = ['200+ integrations', 'Advanced reporting', 'Up to 20 individual users', '40GB individual data', 'Priority chat support', 'Advanced custom fields','Audit log and data history','Backup your account','Personalized service','+ many more...']
  return (
    <section id="pricing" className="min-h-screen pt-[70px] pb-12 relative overflow-hidden">
        <main className="p-5 md:px-5 lg:px-20 flex flex-col gap-20">
            <div>
              <h1 className="primary-header text-center text-4xl sm:text-5xl">Plans that fit your scale</h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:px-1 xl:px-20">
            <PriceCards planType="Basic plan" planDescription="Our most popular plan for small teams." price={10} precededBy="free plan" features={basicFeatures}/>
            <PriceCards planType="Business plan" planDescription="Advanced features and reporting" price={20} precededBy="basic plan" popular features={businessFeatures}/>
            </div>
        </main>
        <StaticBubble className="top-20 md:top-0 -left-10" />
        <StaticBubble className="bottom-48 md:bottom-0 -right-[200px]" imageStyling="scale-x-[-1] -rotate-[35deg]" />
        <div className="absolute bottom-48 md:-top-36 -right-32 -z-20 w-[150px] md:w-[300px]">
          <img width={500} height={500} className="scale-x-[-1] -rotate-[35deg]" src={SoapBubblePattern} alt="Purple soap bubbles" />
        </div>
    </section>
  )
}

export default Pricing

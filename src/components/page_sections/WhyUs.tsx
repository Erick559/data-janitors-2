import StaticBubble from "../staticBubble"
import CallToAction from "./Call-To-Action"
import AWSFoam from '../../image-assets/aws-foam.webp'
import soapBottles from '../../image-assets/soap-bottles.webp'
import cloudMop from '../../image-assets/cloud-mop.webp'
import FeatureCard from "../FeatureCard"

const WhyUs = () => {
  return (
    <div>
        <section id="features" className="min-h-screen pt-[100px] pb-12 relative overflow-hidden">
            <main className="flex flex-col gap-8 md:gap-10 items-center md:px-20 z-5">
                <header>
                    <h1 className="primary-header text-4xl sm:text-5xl">Why Data Janitors</h1>
                </header>

                <div className="flex flex-col items-center gap-10 w-full">
                    <FeatureCard 
                        title="Intuitive Control" 
                        description="Describe your data needs in plain English, and watch our AI make it happen." 
                        src={soapBottles} 
                        alt="Soap Bottles with data janitors emblem resembling how they produce clean data" 
                    />

                    <FeatureCard 
                        title="Powerful Transformations" 
                        description="Our system orchestrates a wide array of data tools to meet your specific requirements." 
                        src={cloudMop} 
                        alt="A mop cleaning the cloud resembling how at Data janitors data is cleaned." 
                        orderImage="order-2 md:order-1"
                        orderText="order-1 md:order-2"
                    />

                    <FeatureCard 
                        title="Continuos Learning" 
                        description="With each task, our AI gets smarter, ensuring ever-improving results." 
                        src={soapBottles} 
                        alt="Soap Bottles with data janitors emblem resembling how they produce clean data." 
                    />
                </div>
            </main>

            <StaticBubble className="top-20 md:top-32 -left-10" />
            <StaticBubble className="bottom-48 md:bottom-28 -right-[200px]" imageStyling="scale-x-[-1] -rotate-[35deg]"/>
        </section>
        <CallToAction 
                title="Clean Data,Clear Insights" 
                titleDescription="tech driven data detox" 
                description="In today's data-driven world, the ability to quickly clean and transform data is your competitive edge. Data Janitors leverages advanced AI to turn your data requests into reality, ensuring your information is spotless, reliable, and ready for action."
                primaryButton="Signup to our Wishlist"
                secondPrimaryButton="Schedule Free Consultation" 
                imageStyling="w-[400px] h-[400px]"
                src={AWSFoam}
                alt="Foam with the words AWS in the middle to resemble data cleaning."
        />
    </div>
  )
}

export default WhyUs

import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import PrimaryButton from "./PrimaryButton";
import { CountUp } from "./CountUp";

interface PriceCards {
    planType: string;
    planDescription:string;
    price:number;
    precededBy:string;
    features:string[];
    popular?:boolean;
}

const PriceCards = ({planType,planDescription,price,precededBy,features,popular}:PriceCards) => {
  return (
    <Card className={`${popular ? "border-4 border-[#DF5A01] shadow-2xl": "border border-[#EAECF0]"}`}>
        <CardHeader className="border-b border-[#EAECF0]">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg sm:text-xl md:text-xl flex items-center font-bold">
                        {planType}
                        {popular ? 
                        (
                            <span className="bg-[#FDEEED] border border-[#FDA86FB2] border-opacity-70 py-[2px] px-[10px] rounded-[16px] text-[#DF5A01] ml-1 font-medium text-sm">Popular</span>
                        )
                        : null}
                    </h1>
                    <p className="text-[#475467] w-[15ch] sm:w-full">{planDescription}</p>
                </div>
                <div>
                    <CountUp end={price} duration={3} suffix="/mth" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="py-5">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold">Features</h1>
                        <p className="text-[#475467]">Everything in our <span className="font-bold">{precededBy}</span> plus....</p>
                    </div>
                    <ul className="grid grid-cols-2 gap-5">
                        {features.map((feature,index)=>(
                            <li className="flex gap-4 items-center" key={index}>
                                <span className="bg-[#FDEEED] rounded-full p-[3px]"><Check className="text-[#DF5A01]" /></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CardContent>
        <CardFooter className="border-t border-[#EAECF0]">
            <div className="flex w-full py-5">
                <PrimaryButton type="primary" className="w-full py-5 rounded-2xl text-lg">
                    Get Started
                </PrimaryButton>
            </div>
        </CardFooter>
    </Card>
  )
}

export default PriceCards

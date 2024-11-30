import { Button } from "./ui/button"

interface PrimaryButton {
    children:React.ReactNode
    type:"primary" | 'ghost'
    className?:string
}

const PrimaryButton = ({children,type,className}:PrimaryButton) => {
  return (
    <Button 
    className= {`${className} ${type === "primary" ? "bg-gradient-to-t from-[#fc472e] to-[#fe9148] text-slate-50" : "text-[#fc472e] bg-white hover:bg-white" } border-2 border-[#fc472e] shadow-[0px_1px_16px_0px_rgba(0,_0,_0,_0.2)] font-semibold`}>
      {children}
  </Button>
  )
}

export default PrimaryButton

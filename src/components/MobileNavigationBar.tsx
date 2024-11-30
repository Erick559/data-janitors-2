import { AlignJustify } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { navLinks } from '../../const'
import { Button } from "./ui/button"

const MobileNavigationBar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className="w-[30px] h-[30px] stroke-white font-semibold cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4" side='top'>
            <SheetTitle hidden>Mobile Menu</SheetTitle>
            <SheetDescription hidden>Navigation that is only accessible to mobile devices.</SheetDescription>
            <ul className="mt-[40px] flex flex-col gap-4">
               {navLinks.map((link,index) => (
                <li key={index}>
                    <SheetClose>
                        <a className="text-lg hover:text-[#fc472e]" href={link.path}>{link.title}</a>
                    </SheetClose>
                </li>
               ))} 
            </ul>
            <SheetClose className="flex justify-start">
                <Button 
                className="py-5 rounded-2xl bg-gradient-to-t from-[#fc472e] to-[#fe9148] text-slate-50 border-2 border-[#fc472e] shadow-[0px_1px_16px_0px_rgba(0,_0,_0,_0.2)] font-semibold">
                    Signup to our Wishlist
                </Button>
            </SheetClose>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavigationBar

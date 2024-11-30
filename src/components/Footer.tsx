import { footerLinks } from "../../const"
import Logo from '../image-assets/data-janitors logo.webp'
import FloatingBubbles from "./FloatingBubble"

const Footer = () => {
  return (
    <footer className="bg-[#27327E] text-slate-50 p-5 md:py-16 md:px-5 lg:px-20 overflow-hidden">
        <div className="flex flex-col gap-20 relative">
            <div className="flex flex-wrap gap-10 justify-between">
                {footerLinks.map((section,index)=>(
                    <div className="flex flex-col gap-3 p-5" key={index}>
                        <div>
                            <h1 className="text-lg">{section.title}</h1>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {section.links.map((link,index)=>(
                                <li className="flex items-center gap-2" key={index}>
                                    {link.text}
                                    {link.badge ? <span className="flex items-center bg-white/10 px-3 py-[2px] border border-slate-50/30 rounded-3xl">{link.badge}</span> : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:justify-between pt-10 border-t-2 border-white">
                <div>
                    <img width={1000} height={1000} className="w-24 h-20" src={Logo} alt="Data janitors logo featuring two caricatures holding a mop ready to clean your data." />
                </div>
                <div className="text-center">
                    <p>© 2024 Data Janitors UI. All rights reserved.</p>
                </div>
            </div>
            <FloatingBubbles startingSize={50}/>
        </div>
    </footer>
  )
}

export default Footer

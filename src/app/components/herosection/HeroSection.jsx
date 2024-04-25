import Image from "next/image"
import heroImage from "../../../../public/assets/images/focus.webp"
const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row bg-focusBg p-16 px-5 md:px-28 gap-5 md:gap-40"> 
        <p className="block md:hidden font-medium text-sm text-mainBlue">GENERATE</p>
          <div className="flex flex-col  justify-between items-start gap-5">
            <span className="text-5xl font-bold">
                Create a custom AI
                chatbot for your website 
                in minutes
            </span>
            <Image src={heroImage} height={900} width={900} className="block md:hidden"/>
            <p className="text-base font-normal">Build a custom GPT on your website and mobile apps to automate engagement,
               marketing, sales, and support with conversational AI.
            </p>
            <button className="bg-mainBlue  px-6 py-2 rounded-3xl cursor-pointer text-focusBg">Start For Free</button>
          </div>
          <div className="hidden md:block">
            <Image src={heroImage} height={900} width={900}/></div>  
        </div>
    )
}

export default HeroSection 
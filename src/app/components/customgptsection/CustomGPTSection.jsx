import Accordion from "@/app/globalComponents/accordion/Accordion";
import CustomGptImage from "../../../../public/assets/images/customGPT.webp";
import Image from "next/image";

const CustomGPTSection = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center  p-6 md:p-10 gap-5 justify-between">
                <span className="text-3xl md:w-1/2 text-center font-bold 2xl:text-[90px] 2xl:leading-[80px] 2xl:w-2/3">Design custom GPTs tailored to your business needs</span>
                <div className="block md:hidden">
                <Image src={CustomGptImage} alt="custom-gpt-image" height={800} width={800}/>

                </div>
                <span className="text-base font-normal 2xl:text-3xl">Create highly customized AI chatbots with no code straight from the Isometrik dashboard.</span>
                <button className="bg-mainBlue text-focusBg rounded-2xl text-sm px-3 py-1 2xl:text-3xl 2xl:rounded-[35px] 2xl:px-7 2xl:py-4 hidden md:block">Start For Free</button>
            </div>
            <div className="flex p-1 md:p-10 2xl:p-20">
                <div className="hidden md:block">
                <Image src={CustomGptImage} alt="custom-gpt-image" height={800} width={800} className="2xl:w-[100rem]"/>

                </div>
                <div className=" w-full p-5 md:p-10">
                <Accordion title="Create bespoke AI prompts" paragraph="Define your AI chatbot behaviour and persona with custom prompts and ensure a unique and engaging user experience" />
                <Accordion title="Train Your AI chatbot with your data" paragraph="Define your AI chatbot behaviour and persona with custom prompts and ensure a unique and engaging user experience" />
                <Accordion title="Design your own custom AI widget" paragraph="Define your AI chatbot behaviour and persona with custom prompts and ensure a unique and engaging user experience" />
                <Accordion title="Test your AI chatbot before production" paragraph="Define your AI chatbot behaviour and persona with custom prompts and ensure a unique and engaging user experience" />
                </div>
                

            </div>
        </div>
    )
}

export default CustomGPTSection
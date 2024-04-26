import CustomChatbotCard from "@/app/globalComponents/custom-chatbot-card/CustomChatbotCard"
import MakeChatbotImage from "../../../../public/assets/images/make ai chatbot in 5 steps.webp"
import CustomizeChatbotImage from "../../../../public/assets/images/customize AI chatbot.webp"
import GainCustomerImage from "../../../../public/assets/images/gain customer.webp"
const CustomChatbotSection = () => {
    return (
        <div className="flex flex-col items-center p-5 md:p-10">
            <div className="md:w-96  2xl:w-2/3 2xl:leading-[80px] text-center p-1">
                <span className="text-3xl font-bold 2xl:text-[90px]">Build your own custom AI chatbot with no code</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5">
                <CustomChatbotCard image={MakeChatbotImage} title="Make an AI chatbot in 5 simple steps" subtitle="Follow our straightforward onboarding flow to create and deploy an AI chatbot on your website." />
                <CustomChatbotCard image={CustomizeChatbotImage} title="Customize your AI chatbot UI" subtitle="Tailor every customer interaction and deliver unparalleled AI customer service using your first-party data." />
                <CustomChatbotCard image={GainCustomerImage} title="Gain customer insights" subtitle="Refine your services, products and business strategies with critical customer data from your AI chatbot conversations." />
            </div>
        </div>
    )
}

export default CustomChatbotSection
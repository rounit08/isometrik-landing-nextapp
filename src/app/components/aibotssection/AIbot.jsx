import Card from "@/app/globalComponents/card/Card"
import LeadgenLogo from "../../../../public/assets/logos/lead generation.webp"
import ShopAssistLogo from "../../../../public/assets/logos/shopping assistance.webp"
const AIbotSection = () => {
    return (
        <div className="flex flex-col items-center p-1 md:p-10">
            <span className="text-center font-bold text-3xl w-10/12 md:w-1/2">Produce AI bots for various roles across your business</span>
            <div className="flex gap-2 md:gap-20 p-4 md:p-10 flex-col md:flex-row">
                <Card logo={LeadgenLogo} title="Lead Generation" paragraph="Get your visitor's data using a lead-generation AI chatbot."  link="#" linkText="LeadGen AI Chatbot →" />
                <Card logo={ShopAssistLogo} title="Shopping assistance" paragraph="Unleash AI in your e-commerce website and drive sales through a chat widget window."  link="#" linkText="Shopping assistance AI Chatbot →" />
                <Card logo={ShopAssistLogo} title="Customer service" paragraph="Enable round-the-clock, global, conversational AI customer service."  link="#" linkText="Customer Service AI Chatbot →" />

            </div>
        </div>
    )
}

export default AIbotSection
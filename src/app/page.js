import Card from "@/app/components/card/Card"; 
import leadGenLogo from "../../public/assets/logos/lead generation.webp"
import BuiltInTouchpoint from "../../public/assets/logos/built in touchpoint.webp"
import ModuleCard from "./components/module-card/ModuleCard";
import CustomChatbotCard from "./components/custom-chatbot-card/CustomChatbotCard";
import fiveminchatbot from "../../public/assets/images/make ai chatbot in 5 steps.webp"
import customizeUI from "../../public/assets/images/customize AI chatbot.webp"
import gainCustomer from "../../public/assets/images/gain customer.webp"


export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-2">
      
  <CustomChatbotCard
  image = {fiveminchatbot}
  title="Make an AI chatbot in 5 simple steps" 
  subtitle ="Follow our straightforward onboarding flow to create and deploy an AI chatbot on your website."
  />
   <CustomChatbotCard
  image = {customizeUI}
  title="Customize your AI chatbot UI" 
  subtitle ="Tailor every customer interaction and deliver unpatalleled AI customer service using your first-party data."
  />
   <CustomChatbotCard
  image = {gainCustomer}
  title="Gain customer insights" 
  subtitle ="Refine your services, products, and business strategies with critical customer data from your AI chatbot conversations."
  />
    </main>
  );
}

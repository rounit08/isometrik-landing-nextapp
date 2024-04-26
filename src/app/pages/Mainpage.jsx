import AIbotSection from "../components/aibotssection/AIbot"
import CardSection from "../components/cardsection/CardSection"
import CustomChatbotSection from "../components/customchatbotsection/CustomChatbotSection"
import CustomGPTSection from "../components/customgptsection/CustomGPTSection"
import EnterpriseSection from "../components/enterprisesection/EnterpriseSection"
import FaqSection from "../components/faqsection/FaqSection"
import FooterSection from "../components/footersection/FooterSection"
import HeroSection from "../components/herosection/HeroSection"
import IsometrikFrameWorkSection from "../components/isometrikframework/IsometrikFrameworkSection"
import Navbar from "../globalComponents/navbar/Navbar"

const Mainpage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CardSection />
            <EnterpriseSection />
            <CustomChatbotSection />
            <IsometrikFrameWorkSection />
            <CustomGPTSection />
            <AIbotSection />
            <FaqSection />
            <FooterSection />
        </div>
    )
}

export default Mainpage
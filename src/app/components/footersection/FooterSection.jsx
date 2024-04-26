import FooterCard from "@/app/globalComponents/FooterCard/FooterCard"
import Footer from "@/app/globalComponents/footer/Footer"
import "../../globals.css";

const FooterSection = () => {
    return (
        <div className="relative mt-72 w-full">
                <FooterCard />
            
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default FooterSection
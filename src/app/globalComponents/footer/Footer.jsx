import FooterList from "../../globalComponents/footer/FooterList/FooterList"
import footerLogo from "../../../../public/assets/logos/footerLogo.webp"
import Image from "next/image"

import twitterLogo from "../../../../public/assets/logos/twitter.webp"
import linkedinLogo from "../../../../public/assets/logos/linkedin.webp"
import instaLogo from "../../../../public/assets/logos/insta.webp"
import facebookLogo from "../../../../public/assets/logos/fb.webp"

const Footer = () => {
    const productsItems = ['Chat', 'Low Latency Live Streaming', 'AI Chat Bots', 'Audio & Video Call', "Pub Sub", "IOT Device Management"]
    const useCaseItems = ['E-Commerce', 'Social Media', 'Dating', 'Digital Health', 'Ed-Tech', 'Customer Service', 'Ride Sharing', 'IOT Device Management']
    const developerItems = ['Developer Portal', "Documentation", "Github", "Slack Community", "Discord"]
    const companyItems = ['About Us', 'Pricing', 'Blogs', 'Contact Us']
    return (
        <div className="flex flex-col gap-2 bg-mainBlue text-focusBg p-2 md:p-20 md:pb-5">
    <div className=" flex items-center flex-col md:flex-row  gap-2">
  
  <div className="flex flex-col  justify-evenly">
      <div className="hidden md:flex flex-col justify-around  w-2/3 h-52">
      <Image src={footerLogo} alt="footerlogo" className="2xl:w-96"/>
      <p className="2xl:text-2xl">Easily integrate live multi-host audio video
         streaming and chat SDKs into your current web, mobile, and IoT apps
      </p>
      </div>
      <div className="gap-5 hidden md:flex 2xl:w-72">
       <Image src={facebookLogo} alt="facebookLogo" className="cursor-pointer 2xl:h-16 2xl:w-52" height={30} width={30}/>
       <Image src={instaLogo} alt="instalogo"       className="cursor-pointer 2xl:h-16 2xl:w-52" height={30} width={30}/>
       <Image src={twitterLogo} alt="twitterLogo"   className="cursor-pointer 2xl:h-16 2xl:w-52" height={30} width={30}/>
       <Image src={linkedinLogo} alt="linkedinLogo" className="cursor-pointer 2xl:h-16 2xl:w-52" height={30} width={30}/>
      </div>
      
  </div>

  <div className="grid grid-cols-2  md:flex gap-10 2xl:gap-28 p-2 pt-12">
  <FooterList title="PRODUCTS" items={productsItems} />
  <FooterList title="USE CASES" items={useCaseItems} />
  <FooterList title="DEVELOPERS" items={developerItems} />
  <FooterList title="COMPANY" items={companyItems} />
  </div>

  <div className="flex gap-5 md:hidden">
       <Image src={facebookLogo} alt="facebookLogo" className="cursor-pointer" />
       <Image src={instaLogo} alt="instalogo"       className="cursor-pointer" />
       <Image src={twitterLogo} alt="twitterLogo"   className="cursor-pointer" />
       <Image src={linkedinLogo} alt="linkedinLogo" className="cursor-pointer" />
      </div>
  
</div>
<div className=" pt-10 w-full">
    <p className="text-sm font-normal border-t 2xl:text-2xl">©Copyright Reserved Isometrik Software Solutions pvt ltd </p>
</div>
  </div>
        
    )
}

export default Footer
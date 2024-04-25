"use client"
import Image from "next/image"
import Logo from "../../../../public/assets/logos/logo.webp"
import DropdownMenu from "../Dropdown/Dropdown";
import { useState } from "react";
const Navbar = () => {
const[isSidebarOpen, setIsSidebarOpen] = useState(false)
    const productItems = ['Leadgen AI Chatbot', 'Shopping Assistance AI Chatbot', 'Customer Service AI Chatbot'];
  const useCasesItems = ['AI Chatbots', 'AI modules', 'AI biz bots'];

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    console.log("lcicking ")
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
    return(
        <div className="flex justify-between items-center w-full p-5">
            <div className="block md:hidden" onClick={toggleSidebar}>
            <svg
          class="w-8 h-8 text-gray-800"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
            </div>
            {isSidebarOpen && <div id="sidebar" className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out -translate-x-2/2 md:hidden">
        <button onClick={closeSidebar} class="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="close button">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    
        <div className="p-4 mt-8 font-medium text-2xl">
            <div  className="p-2 border-b"><DropdownMenu title="Products" items={productItems}/>
</div>
<div  className="p-2 border-b"><DropdownMenu title="Use Cases" items={useCasesItems}/>
</div>            <p className="p-2 border-b ">Pricing</p>
            <p className="p-2 border-b ">For Agencies</p>
            <p className="p-2 border-b ">IOT</p>
            <p className="p-2 border-b ">About Us</p>
        </div>
    </div>}
            
            <div className="flex  md:gap-10 pl-1 md:pl-14">
                <Image src={Logo}  width={140} height={24}/>
                 <div className="hidden md:flex gap-10 text-sm font-medium">
                    <DropdownMenu title="Products" items={productItems} />
                    <DropdownMenu title="Use Cases" items={useCasesItems} />
                    <span className="cursor-pointer">Pricing</span>
                    <span className="cursor-pointer">For Agents</span>
                    <span className="cursor-pointer">IOT</span>
                    <span className="cursor-pointer">About Us</span>
                 </div>
            </div>
            <div className="gap-2 font-semibold text-xs hidden md:flex">
                <button className="bg-mainBlue  px-3 py-2 rounded-3xl cursor-pointer text-focusBg">Get Started</button>
                <button className="cursor-pointer border rounded-3xl px-3 py-2 border-mainBlue text-mainBlue">Talk to sales</button>
            </div>
            <div className="block md:hidden bg-mainBlue  px-6 py-2 rounded-3xl cursor-pointer text-focusBg">Login</div>
        </div>
    )
}

export default Navbar
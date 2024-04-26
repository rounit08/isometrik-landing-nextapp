import Image from "next/image"

const CustomChatbotCard = (props) => {
    return (
        <div className=" flex flex-col items-center flex-1 p-7  gap-2">
           <Image src={props.image} height={320} width={320} className="xl:w-full 2xl:h-full"/>
           <span className="text-xl 2xl:text-5xl font-bold w-80 2xl:w-full text-center">{props.title}</span>
           <p className="text-base 2xl:text-2xl font-normal w-80 2xl:w-full text-center">{props.subtitle}</p>
        </div>
    )
}

export default CustomChatbotCard
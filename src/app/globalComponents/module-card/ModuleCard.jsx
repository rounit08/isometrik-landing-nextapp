import Image from "next/image"

const ModuleCard =(props)=>{
    return (
        <div className="flex flex-1 flex-col border-2 2xl:border-8 border-focusBg rounded-lg h-64 2xl:h-96  p-4 2xl:p-7 gap-2 2xl:gap-8 2xl:rounded-2xl">
            <div className="flex  w-full gap-2 2xl:gap-5 items-center">
                <Image  src={props.image} height={58} width={58} className="2xl:w-20" alt="module logo"/>
                <span className="font-bold text-base w-44 2xl:w-72 2xl:text-3xl">{props.title}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold font-sm w-10/12 2xl:text-[25px]">
                 {props.subtitle}
                </span>
                <ul className="flex flex-col list-disc font-normal text-sm p-2 pl-5 w-10/12 2xl:text-2xl">
                {props.listitems.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
                </ul>
            </div>
        </div>
    )
}

export default ModuleCard
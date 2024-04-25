import Image from "next/image"

const ModuleCard =(props)=>{
    return (
        <div className="flex flex-1 flex-col border border-gray-250 rounded-lg h-64 items-center justify-between p-4  gap-2">
            <div className="flex  w-full gap-2 items-center">
                <Image  src={props.image} height={58} width={58}/>
                <span className="font-bold text-base w-44">{props.title}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold font-sm w-10/12">
                 {props.subtitle}
                </span>
                <ul className="flex flex-col list-disc font-normal text-sm p-2 pl-5 w-10/12">
                {props.listitems.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
                </ul>
            </div>
        </div>
    )
}

export default ModuleCard
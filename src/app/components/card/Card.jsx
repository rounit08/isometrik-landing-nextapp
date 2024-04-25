import Image from "next/image";

const Card = (props) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg flex flex-1 flex-col items-center justify-between p-4 md:p-2 aspect-video w-full">
      <Image src={props.logo} width={48} height={48} /> 
      <span className="text-base font-bold">{props.title}</span>
      <p className="font-normal text-xs md:text-sm text-center">{props.paragraph}</p>
      <a className="text-mainBlue text-sm md:text-base font-bold cursor-pointer" href={props.link}>{props.linkText}</a>
    </div>
  );
};

export default Card;
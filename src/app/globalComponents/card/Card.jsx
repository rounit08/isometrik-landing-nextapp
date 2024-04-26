import Image from "next/image";

const Card = (props) => {
  return (
    <div className="border-2 2xl:border-8 border-focusBg rounded-lg flex flex-1 flex-col items-center justify-between p-4 md:p-2 2xl:p-4 aspect-video w-full">
      <Image src={props.logo} width={48} height={48} className="2xl:h-30 2xl:w-28" alt="card logo"/> 
      <span className="text-base font-bold 2xl:text-3xl">{props.title}</span>
      <p className="font-normal text-xs md:text-sm 2xl:text-2xl text-center">{props.paragraph}</p>
      <a className="text-mainBlue text-sm md:text-base font-bold cursor-pointer 2xl:text-2xl" href={props.link}>{props.linkText}</a>
    </div>
  );
};

export default Card;
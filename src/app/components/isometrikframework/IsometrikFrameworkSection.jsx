import Image from "next/image"
import IsometrikImage from "../../../../public/assets/images/framework-isometrik.webp"
const IsometrikFrameWorkSection = () => {
    return (
        <div className="flex flex-col items-center p-5 gap-10 md:gap-0">
            <div className="flex flex-col items-center p-2 md:p-10 gap-4">
                <span className="text-center font-bold text-3xl 2xl:text-[90px] 2xl:leading-[90px]  md:w-1/2 2xl:w-2/3">Isometrik Agent Framework abstracts the complexity</span>
                <div className="hidden md:flex flex-col text-center text-base font-normal 2xl:text-3xl">
                    <p>Move on from complex architectures involving endless chain and indexes.</p>
                    <p>Isometrik's fully integrated agents streamline AI development for rapid launch.</p>
                </div>
            </div>
            <div>
                <Image src={IsometrikImage} alt="isometrik image" height={900} width={1000} className="2xl:w-[150rem]"/>
            </div>
            <div className="flex md:hidden flex-col gap-2 items-start md:items-between text-base font-normal ">
                    <p>Move on from complex architectures involving endless chain and indexes.</p>
                    <p>Isometrik's fully integrated agents streamline AI development for rapid launch.</p>
                </div>
        </div>
    )
}

export default IsometrikFrameWorkSection
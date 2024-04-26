import "../../globals.css"
const FooterCard = () => {
    return (
        <div className=" footercard absolute flex flex-col md:flex-row bg-white border border-focusBg p-1 md:p-10 items-center md:items-end rounded-2xl w-[22rem] md:w-[56rem] lg:w-[70rem] 2xl:w-[130rem] h-80 top-[-17rem] left-5 md:left-16 lg:left-18 2xl:left-60 shadow-lg justify-around">
            <span className="text-4xl font-bold w-2/4 md:w-2/3 2xl:text-[80px] 2xl:leading-[90px]">Ready to enhance your app&quot;s capabilities?</span>
            <button className="bg-mainBlue px-10 rounded-3xl cursor-pointer text-focusBg h-1/6 2xl:text-3xl">Talk to Sales</button>
        </div>
    )
}

export default FooterCard
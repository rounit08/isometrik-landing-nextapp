const FooterList = ({title, items}) => {
    return (
        <div className="flex flex-col w-44 ">
          <span className="text-base font-bold 2xl:text-3xl">{title}</span>  
          <ul className="text-sm 2xl:text-xl font-light leading-loose 2xl:leading-[40px] cursor-pointer">
          {items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
            </ul>  
        </div>
    )
}

export default FooterList
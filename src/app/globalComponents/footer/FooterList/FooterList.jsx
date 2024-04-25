const FooterList = ({title, items}) => {
    return (
        <div className="flex flex-col w-44 ">
          <span className="text-base font-bold">{title}</span>  
          <ul className="text-sm font-light leading-loose cursor-pointer">
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
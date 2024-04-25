import { useState } from 'react';
import "../../globals.css"

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center gap-2 cursor-pointer">
        <span>{title}</span>
        <svg
          className={`w-3 h-3 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-focusBg cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

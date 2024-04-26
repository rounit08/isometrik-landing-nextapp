"use client"
import { useState } from "react";

const Accordion = (props) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className="p-1 border-b border-gray-100">
            {isAccordionOpen ? <span onClick={toggleAccordion} className="flex items-center gap-2 font-medium text-base cursor-pointer bg-focusBg p-2 rounded-lg justify-between">
                {props.title}
                <svg
                    className={`w-3 h-3 ${isAccordionOpen ? 'rotate-0' : 'rotate-180'}`}
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
            </span> : <span onClick={toggleAccordion} className="flex items-center gap-2 font-semibold text-base cursor-pointer p-2 justify-between ">
                {props.title}
                <svg
                    className={`w-3 h-3 ${isAccordionOpen ? 'rotate-0' : 'rotate-180'}`}
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
            </span> }
            
            {isAccordionOpen && (
                <p className="transform transition-transform duration-300 ease-in-out -translate-x-2/2 bg-focusBg rounded-lg font-normal p-2">{props.paragraph}</p>
            )}
        </div>
    );
};

export default Accordion;

import React, { useState } from "react";

interface AccordionProps {
  id: number;
  title: string;
  contents: { value: string; label: string }[];
  defaultSelected?: string;
  defaultExpand?: number;
  onChange: (event: string) => void;
}

export default function Accordion({
  id,
  title,
  contents,
  defaultSelected,
  defaultExpand,
  onChange,
}: AccordionProps) {
  const [isExpand, setIsExpand] = useState(defaultExpand === id);
  const [expandIndex, setExpandIndex] = useState(defaultExpand);

  const handleExpand = (id: number) => {
    setIsExpand(!isExpand);
    setExpandIndex(id);
  };
  return (
    <div className={`${isExpand && expandIndex === id ? "border-b" : null}`}>
      <button
        className="mb-2 flex items-center justify-between py-1"
        onClick={() => handleExpand(id)}
      >
        <label className="text-lg">{title}</label>
        <svg
          className={`${isExpand && expandIndex === id ? "rotate-[270deg] transition-all" : "rotate-90 transition-all"}`}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.3995 20.5655L17.5562 26.4085C17.1965 26.7683 17.196 27.3502 17.5546 27.7089C17.9158 28.0701 18.4955 28.0669 18.8551 27.7073L25.3458 21.2166L25.3466 21.2158L25.3475 21.215C25.5278 21.0346 25.6173 20.7998 25.617 20.5652C25.6161 20.3299 25.5265 20.0953 25.3475 19.9161L25.3466 19.9153L25.3458 19.9145L18.8551 13.4235C18.4954 13.0638 17.9133 13.0632 17.5546 13.4219C17.1935 13.7831 17.1967 14.3629 17.5562 14.7223L23.3995 20.5655Z"
            fill="#222222"
          />
        </svg>
      </button>

      {isExpand &&
        expandIndex === id &&
        contents.map((content, index) => (
          <button
            key={index}
            className={`${defaultSelected === content.value && "bg-[#DEF81C]"} mb-2 w-full p-[10px] text-left text-sm checked:bg-[#DEF81C] hover:bg-[#F2F2F2]`}
            onClick={() => onChange(content.value)}
          >
            <p>{content.label}</p>
          </button>
        ))}
    </div>
  );
}

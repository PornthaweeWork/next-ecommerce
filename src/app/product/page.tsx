"use client";
import React, { useState, useEffect } from "react";
import SelectOption from "@/components/SelectOption";
import Radio from "@/components/base/Radio";
import Accordion from "@/components/Accordion";

export default function ProductPage() {
  const [optionSelected, setOptionSelected] = useState("ASC");
  const [accordionSelected, setAccordingSelected] = useState("T-Shirts1")
  const optionSort: { value: string; label: string }[] = [
    {
      value: "ASC",
      label: "Price - Low to high",
    },
    {
      value: "DESC",
      label: "Price - Low to high",
    },
    {
      value: "ratings",
      label: "Ratings",
    },
  ];

  const items: { id: number, title: string; contents: {value: string, label: string}[]}[] = [
    {
      id: 1,
      title: 'หัวข้อ 1',
      contents: [{value:'All', label:'All items'}, {value:'T-Shirts', label:'T-Shirts'}, {value:'Cardigans', label:'Cardigans'}],
    },
    {
      id: 2,
      title: 'หัวข้อ 2',
      contents: [{value:'All1', label:'All items'}, {value:'T-Shirts1', label:'T-Shirts'}, {value:'Cardigans1', label:'Cardigans'}],
    },
    {
      id: 3,
      title: 'หัวข้อ 3',
      contents: [{value:'All2', label:'All items'}, {value:'T-Shirts2', label:'T-Shirts'}, {value:'Cardigans2', label:'Cardigans'}],
    },
  ];

  const handleChangeOption = (value: string) => {
    setOptionSelected(value);
  }

  const handleChangeAccordion = (value: string) => {
    setAccordingSelected(value);
  }

  useEffect(() => {
    console.log("optionSelected :>> ", optionSelected);
  }, [optionSelected]);

  return (
    <div className="my-[100px] flex">
      <div className="mr-[130px] w-[280px]">
        {items.map((item, index) => (
          <Accordion key={index} id={item.id} title={item.title} contents={item.contents} defaultSelected={accordionSelected} defaultExpand={2} onChange={handleChangeAccordion}/>
        ))}
      </div>
      <div className="flex flex-1">
        <div className="flex w-full items-start justify-between">
          <span className="text-2xl font-bold">
            Woman’s Clothing
          </span>
          <SelectOption titleButton="Sort By">
            {optionSort.map((option, index) => (
              <Radio
                key={index}
                value={option.value}
                label={option.label}
                className={`${index < optionSort.length - 1 && "mb-5"}`}
                checked={optionSelected === option.value}
                onChange={handleChangeOption}
              />
            ))}
          </SelectOption>
        </div>
      </div>
    </div>
  );
}

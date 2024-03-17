"use client";
import React, { useState, useEffect } from "react";
import SelectOption from "@/components/SelectOption";
import Radio from "@/components/base/Radio";

export default function ProductPage() {
  const [optionSelected, setOptionSelected] = useState("ASC");
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

  const handleChangeOption = (value: string) => {
    setOptionSelected(value);
  }

  useEffect(() => {
    console.log("optionSelected :>> ", optionSelected);
  }, [optionSelected]);

  return (
    <div className="my-[100px] flex">
      <div className="mr-[130px] w-[280px]">accdiron</div>
      <div className="flex flex-1">
        <div className="flex w-full items-center justify-between">
          <span className="self-start text-2xl font-bold">
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

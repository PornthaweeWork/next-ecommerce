"use client";
import React, { useState, useEffect } from "react";

export default function ProductPage() {
  const [isShowSort, setIsShowSort] = useState(false);
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

  useEffect(() => {
    console.log("isShowSort :>> ", isShowSort);
  }, [isShowSort]);

  return (
    <div className="my-[100px] flex">
      <div className="mr-[130px] w-[280px]">accdiron</div>
      <div className="flex flex-1">
        <div className="flex w-full items-center justify-between">
          <span className="self-start text-2xl font-bold">
            Woman’s Clothing
          </span>
          <div className="relative flex w-fit flex-col items-end justify-center">
            <button
              className="border p-3"
              onClick={(): void => setIsShowSort(!isShowSort)}
            >
              Sort by
            </button>
            {isShowSort && (
              <div className="border p-5">
                {optionSort.map((option, index) => (
                  <div
                    key={index}
                    className={`${index < optionSort.length - 1 && "mb-5"} flex items-center`}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      className="mr-4 size-6 checked:bg-[#C1CD00]"
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

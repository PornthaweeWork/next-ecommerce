"use client";
import React, { useState, useEffect } from "react";
import SelectOption from "@/components/SelectOption";
import Radio from "@/components/base/Radio";
import Accordion from "@/components/Accordion";
import getCategories from "@/api/product";
import { useSearchParams, useRouter } from "next/navigation";
import transformCategories from "@/utils/transform";


interface Category {
  id: string;
  title: string;
  contents: { value: string; label: string }[];
}

interface AccordionDefault {
  id: string;
  contentId: string;
}

export default function ProductPage() {
  const [optionSelected, setOptionSelected] = useState("ASC");
  const [accordionSelected, setAccordingSelected] = useState<AccordionDefault>({
    id: "",
    contentId: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

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
  };

  const handleChangeAccordion = (parentId: string, contentId: string) => {
    setAccordingSelected({ id: parentId, contentId: contentId });
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(transformCategories(data));
    });
  }, []);

  useEffect(() => {
    const categoryParams = searchParams.get("category");
    const parentCate = categories.find((cate) =>
      cate.contents.find((content) => content.value === categoryParams),
    );
    if (categoryParams && parentCate) {
      setAccordingSelected({ id: parentCate.id, contentId: categoryParams });
    }
    setIsFetched(true);
  }, [categories]);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // router.push({})
  },[accordionSelected])

  return (
    <>
      {isFetched ? (
        <div className="my-[100px] flex">
          <div className="mr-[130px] w-[280px]">
            {categories.map((item, index) => (
              <Accordion
                key={index}
                id={item.id}
                title={item.title}
                contents={item.contents}
                defaultSelected={accordionSelected.contentId}
                defaultExpand={accordionSelected.id}
                onChange={handleChangeAccordion}
              />
            ))}
          </div>
          <div className="flex flex-1">
            <div className="flex w-full items-start justify-between">
              <span className="text-2xl font-bold">Woman’s Clothing</span>
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
      ) : (
        <div className="fixed left-[50%] top-[50%]">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </>
  );
}

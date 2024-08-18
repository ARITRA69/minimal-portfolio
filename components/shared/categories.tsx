"use client";

import { ICategory } from "@/types";

type CategoriesProps = {
  categories: ICategory[];
};

export const Categories = (props: CategoriesProps) => {
  return (
    <ul className="flex items-center justify-end gap-4">
      {props.categories.map((category) => (
        <li key={category.id} className="md:text-xl font-semibold">
          {category.title}
        </li>
      ))}
    </ul>
  );
};

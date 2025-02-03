import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["bleach"]);
  function newCategory(newCat: any) {
    if (categories.includes(newCat)) return;
    setCategories([newCat, ...categories]);
  }
  return (
    <>
      <AddCategory newCategory={newCategory} />
      <h1>GiftExpertApp</h1>
      {categories.map((category) => (
        <GifGrid key={category} title={category} />
      ))}
    </>
  );
};

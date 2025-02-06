import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  function newCategory(newCat: string) {
    if (categories.includes(newCat)) return;
    setCategories([newCat, ...categories]);
  }

  function deleteCategory(categoryToDelete: string) {
    const res = categories.filter((category) => {
      category !== categoryToDelete;
    });
    setCategories(res);
  }
  return (
    <>
      <AddCategory newCategory={newCategory} />
      <h1>GiftExpertApp</h1>
      {categories.map((category) => (
        <GifGrid key={category} title={category} onDelete={deleteCategory} />
      ))}
    </>
  );
};

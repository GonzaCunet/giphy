import { useState } from "react";

export const AddCategory = (prop: any) => {
  const [input, setInput] = useState("");
  function inputChange(e: any) {
    setInput(e.target.value);
  }
  function submitValue(e: any) {
    e.preventDefault();
    if (input.trim().length <= 1) return;
    prop.newCategory(input.trim());
    setInput("");
  }

  return (
    <form onSubmit={submitValue}>
      <input
        type="text"
        placeholder="Busca gifs"
        onChange={inputChange}
        value={input}
      />
    </form>
  );
};

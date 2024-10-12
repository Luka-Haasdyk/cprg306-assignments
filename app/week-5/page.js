"use client";
import { useState } from "react";
import NewItemFunction from "./new-item";

export default function Page() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name, category, quantity
    }
    console.log(item);
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main className="p-5">
      <NewItemFunction
        currentQuantity={quantity}
        incrementFunction={increment}
        decrementFunction={decrement}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        category={category}
        setCategory={setCategory}
      />
    </main>
  );
}

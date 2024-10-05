"use client";
import { useState } from "react";
import NewItemFunction from "./new-item";

export default function Page() {
    const [quantity, setQuantity] = useState(1);
  
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

    return (
        <main className="p-5">
            <NewItemFunction
                currentQuantity={quantity}
                incrementFunction={increment}
                decrementFunction={decrement}
            />
        </main>


    )
};
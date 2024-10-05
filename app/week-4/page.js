"use client";
import { useState } from "react";
import NewItemFunction from "./new-item";

export default function Page() {
    const [count, setCount] = useState(1);
  
    const incrementCounter = () => {
      if (count < 20) {
        setCount(count + 1);
      }
    };
  
    const decrementCounter = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

    return (
        <main className="p-5">
            <NewItemFunction
                currentCount={count}
                incrementCounterFunction={incrementCounter}
                decrementCounterFunction={decrementCounter}
            />
        </main>


    )
};
"use client";

import ItemList from "./item-list";
import NewItemFunction from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold ml-5 mt-3 mb-3"> Shopping List </h1>
      <NewItemFunction onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

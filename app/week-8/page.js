"use client";

import ItemList from "./item-list";
import NewItemFunction from "./new-item";
import itemsData from "./items.json";
import MealIdeasFunction from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name
    .toLowerCase()
    .replace(/(\d+\s?(kg|g|lb|oz|dozen|pcs|pieces|grams|kilograms|pounds|ounces|L|pack))/gi, '')
    .replace(/(dozen)/gi, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold ml-5 mt-3 mb-3"> Shopping List </h1>
      <div className="flex">
        <div className="flex-1">
          <NewItemFunction onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="flex-1">
          <MealIdeasFunction ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

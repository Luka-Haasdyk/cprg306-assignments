"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();
  const sortedGroupedItems = sortedCategories.map((category) => ({
    category: category,
    items: groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)),
  }));

  const getSortButtonStyle = (sortType) => {
    if (sortBy === sortType) {
      return "bg-orange-400 text-white font-semibold rounded pl-10 pr-10 pt-1 pb-1 ml-5 mb-3";
    } else if (sortType === "grouped" && grouped) {
      return "bg-orange-400 text-white font-semibold rounded pl-10 pr-10 pt-1 pb-1 ml-5 mb-3";
    } else {
      return "bg-orange-700 text-white rounded pl-5 pr-5 pt-1 pb-1 ml-5 mb-3";
    }
  };

  return (
    <div className="ml-5">
      <div className="flex">
        <p> Sort by: </p>
        <button
          className={getSortButtonStyle("name")}
          onClick={() => {
            setSortBy("name");
            setGrouped(false);
          }}
        >
          Name
        </button>
        <button
          className={getSortButtonStyle("category")}
          onClick={() => {
            setSortBy("category");
            setGrouped(false);
          }}
        >
          Category
        </button>
        <button
          className={getSortButtonStyle("grouped")}
          onClick={() => {
            setGrouped(!grouped);
            setSortBy("");
          }}
        >
          Grouped Category
        </button>
      </div>
      <ul className="list-none">
        {grouped
          ? sortedGroupedItems.map((group) => (
              <li key={group.category}>
                <h2 className="capitalize text-xl">{group.category}</h2>
                <ul className="list-none">
                  {group.items.map((item) => (
                    <Item
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onSelect={onItemSelect}
                      onDelete={onDeleteItem}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
                onDelete={onDeleteItem}
              />
            ))}
      </ul>
    </div>
  );
}

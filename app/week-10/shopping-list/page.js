"use client";

import ItemList from "./item-list";
import NewItemFunction from "./new-item";
import MealIdeasFunction from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const router = useRouter();

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      if (itemId) {
        newItem.id = itemId;
        setItems([...items, newItem]);
      }
    } catch (error) {
      console.log("Error adding item: ", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.log("Error deleting item: ", error);
    }
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .toLowerCase()
      .replace(
        /(\d+\s?(kg|g|lb|oz|dozen|pcs|pieces|grams|kilograms|pounds|ounces|L|pack))/gi,
        ""
      )
      .replace(/(dozen)/gi, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.log(error);
    }
  }

  const toggleAccountInfo = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main>
      {user ? (
        <div>
          <h1 className="text-3xl font-bold ml-5 mt-3 mb-3">
            {user.displayName}'s Shopping List
          </h1>
          <div className="flex">
            <div className="flex-1">
              <button
                type="button"
                onClick={handleSignOut}
                className="text-lg bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-1 ml-5 mt-2 mb-5"
              >
                Sign Out
              </button>
              <div className="flex-1">
                <button
                  type="button"
                  onClick={toggleAccountInfo}
                  className="text-lg bg-blue-500 hover:bg-blue-700 text-white rounded px-5 py-1 ml-5"
                >
                  Account
                </button>
                {showAccountInfo && (
                  <div className="flex items-center bg-slate-900 p-4 rounded-lg ml-5 w-1/2 border-2 border-blue-500">
                    <img src={user.photoURL} className="w-10 h-10 m-3" />
                    <div>
                      <p>Display Name: {user.displayName}</p>
                      <p>Email: {user.email}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <NewItemFunction onAddItem={handleAddItem} />
                <ItemList
                  items={items}
                  onItemSelect={handleItemSelect}
                  onDeleteItem={handleDeleteItem}
                />
              </div>
            </div>
            <div className="flex-1">
              <MealIdeasFunction ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      ) : (
        <p>Cannot render this page as you are not logged in!</p>
      )}
    </main>
  );
}

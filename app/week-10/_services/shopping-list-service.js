import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsReference = collection(db, "users", userId, "items");
    const itemsQuery = query(itemsReference);
    const itemsSnapshot = await getDocs(itemsQuery);

    let items = [];
    itemsSnapshot.forEach((docSnap) => {
      let item = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      items.push(item);
    });
    return items;
  } catch (error) {
    console.log("Error fetching shopping list items: ", error);
  }
}

export async function addItem(userId, item) {
  try {
    const newItemReference = collection(db, "users", userId, "items");
    const newItemPromise = await addDoc(newItemReference, item);
    return newItemPromise.id;
  } catch (error) {
    console.log("Error adding shopping list item: ", error);
  }
}

export async function deleteItem(userId, itemId) {
  try {
    const itemDoc = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.log("Error deleting shopping list item: ", error);
  }
}

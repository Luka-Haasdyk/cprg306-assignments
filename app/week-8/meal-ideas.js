"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return [];
  }
}

async function fetchMealDetails(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return null;
  }
}

export default function MealIdeasFunction({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);
  const [expandedMealId, setExpandedMealId] = useState(null);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);

      const detailedMeals = await Promise.all(
        mealIdeas.map(async (meal) => {
          const details = await fetchMealDetails(meal.idMeal);
          return details;
        })
      );
      setMealDetails(detailedMeals);
    } else {
      setMeals([]);
      setMealDetails([]);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const toggleMealDetails = (id) => {
    setExpandedMealId(expandedMealId === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Meal Ideas</h1>
      {!ingredient && <p>Select an item to see meal ideas</p>}
      {ingredient && meals.length === 0 && (
        <p>No meal ideas found for {ingredient}</p>
      )}
      {ingredient && meals.length > 0 && (
        <p> Here are some meal ideas using {ingredient}:</p>
      )}
      <ul>
        {mealDetails.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-slate-900 w-1/2 p-2 mb-1 hover:bg-orange-700"
          >
            <h2
              className="cursor-pointer"
              onClick={() => toggleMealDetails(meal.idMeal)}
            >
              {meal.strMeal}
            </h2>
            {expandedMealId === meal.idMeal && (
              <div>
                <img src={meal.strMealThumb} className="w-1/4 h-1/4 pt-3 pb-3" />
                <h3 className="text-xs text-gray-400">Ingredients needed:</h3>
                <ul>
                  {Object.keys(meal)
                    .filter(
                      (key) => key.startsWith("strIngredient") && meal[key]
                    )
                    .map((key, index) => (
                      <li key={key} className="text-xs text-gray-400 indent-5">
                        {meal[key]} ({meal[`strMeasure${index + 1}`]})
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addFood } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardType) {
  const [foodState, setFood] = useState("");
  const dispatch = useDispatch();
  const handleAddFood = () => {
    if(foodState === "") {
        return;
    }
    dispatch(addFood({ id, food: foodState }));
    setFood("");
  };
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {food.map((food) => {
          return <div className="customer-food">{food}</div>;
        })}
        <div className="customer-food-input-container">
          <input
            value={foodState}
            onChange={(event) => setFood(event.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}

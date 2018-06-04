import React from 'react';

const FoodPairings = (props) => {
  const foodPairings = props.currentPairings.map(food => {
    return (
      <div key={food.id} className="form-style-6">
        <h1>{food.nameOfFood}</h1>
        <h2><a href={food.recipeURL}>Recipe</a></h2>
        <p>{food.description}</p>
      </div>
    )
  })
  
  return (
    <div>
    <div id="form-container">
      {foodPairings}
    </div>
    <button onClick={props.pairings}>Back</button>
    </div>
  );
};

export default FoodPairings;
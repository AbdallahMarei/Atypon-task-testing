import React from 'react'
import "./recipe.css"
import { Link } from "react-router-dom"

function Recipe({ recipes, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='recipe-container'>
      {recipes ? recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <img className="card-img-top recipe-image" src={recipe.image} alt="recipe" />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">Calories: {recipe.nutrition.nutrients[0].amount}</p>
            <Link to={`/recipes/${recipe.id}`}><button type='button' className="btn btn-primary recipe-btn">More Info</button></Link>
          </div>
        </div>
      )) : ""}
    </div>
  )
}

export default Recipe
import React, { useEffect, useState } from 'react'
import "./detailed-recipe.css"
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

function DetailedRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      console.log(res.data);
      setRecipe(res.data);
    };

    fetchRecipes();
  }, [id]);
  return (
    <div className='container p-4 my-4 rounded border bg-light detailed-container'>
      <div>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className='recipe-details'>
        <h2>Name: {recipe.title}</h2>

        {recipe.cuisines ? <><span>Type of cuisine: {recipe.cuisines.map((cuisine, ind) => <span key={ind}> {cuisine}</span>)} </span><br /></> : ""}

        <span>Minutes to serve: {recipe.readyInMinutes}</span><br />
        <span className="recipe-price-detailed">{recipe.vegetarian ? "Vegetarian" : "Not Vegetarian"}</span><br />
        <span className="recipe-price-detailed">{recipe.dairyFree ? "Dairy Free" : "Not Dairy Free"}</span><br />
        <span className="recipe-price-detailed">{recipe.cheap ? "Affordable" : "Expensive"}</span><br />
        <Link to={`/`}><button type='button' className='btn btn-primary detailed-btn'>All recipes</button></Link>
      </div>
    </div>
  )
}

export default DetailedRecipe
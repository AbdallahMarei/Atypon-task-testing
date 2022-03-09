import React, { useState, useEffect } from 'react';
import Recipe from '../../components/recipe/recipe'
import "./home-page.css"
import axios from 'axios';
import Pagination from '../../components/pagination/pagination';
import Search from '../../components/search/search';
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;


function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const [searchRecipe, setSearchRecipe] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&maxCalories=800&minCalories=50&number=50`);
      console.log(res.data.results);
      setRecipes(res.data.results);
      setLoading(false);
    };
    fetchRecipes();
  }, []);

  const handleChange = (e) => {
    setSearchRecipe(e.target.value);
  };


  /// handle search from api
  const handleSubmit = async (e) => {
    e.preventDefault();
    let letters = /^[A-Za-z]+$/;
    let newSearch = searchRecipe.trim().toLowerCase();
    if (!searchRecipe || !newSearch.match(letters)) {
      alert("Please make you entered a valid input with only letters");
      setSearchRecipe("");
      return
    }
    try {
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${newSearch}&number=2&maxCalories=800&minCalories=50`);
      let results = res.data.results;
      console.log(results)
      if (!results.length) {
        alert("No such recipe exists");
        setSearchRecipe("");
        return
      }
      setFilteredRecipes(results);
    } catch (error) {
      console.error(error.message);
    }
  }

  //filter existing recipes

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newFilteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchRecipe.toLowerCase()));
  //   if(!newFilteredRecipes.length){
  //   alert("recipe not found");
  //   }
  //   setFilteredRecipes(newFilteredRecipes);
  // }

  const handleReset = (e) => {
    setFilteredRecipes([]);
    setSearchRecipe("")
  }

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container p-4 my-4 rounded border bg-light'>
      <Search searchRecipe={searchRecipe} handleChange={handleChange} handleReset={handleReset} handleSubmit={handleSubmit} />
      {filteredRecipes.length ? <Recipe recipes={filteredRecipes} loading={loading} /> : <> <Recipe recipes={currentRecipes} loading={loading} />
        <Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} />
      </>
      }
    </div>
  )
}

export default Home
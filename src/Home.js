import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "9206513be02346ef90b38fad4c143e86";

function Home() {
  const [query, setQuery] = useState('pasta');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    if (query === '') return;
    
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for recipes..."
        />
        <button onClick={searchRecipes}>SEARCH</button>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <Link to={`/recipe/${recipe.id}`} className="recipe-title">
              {recipe.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
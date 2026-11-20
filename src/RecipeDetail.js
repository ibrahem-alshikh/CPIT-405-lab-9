import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = "9206513be02346ef90b38fad4c143e86";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="detail-container">
      <h1>{recipe.title}</h1>
      
      <img src={recipe.image} alt={recipe.title} className="detail-image" />
      
      <div 
        className="summary" 
        dangerouslySetInnerHTML={{ __html: recipe.summary }} 
      />

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <div 
        dangerouslySetInnerHTML={{ __html: recipe.instructions }} 
      />
    </div>
  );
}

export default RecipeDetail;
// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = 'http://192.168.234.1:2000';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/recette`);

        console.log(response);

        if (!response.data) {
          throw new Error(`Erreur lors de la requête : ${response.status}`);
        }

        setRecipes(response.data);
      } catch (error) {
        console.error(`Une erreur s'est produite : ${error.message}`);
      }
    };

    fetchData();
  }, []);

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'center',
    borderRadius: '8px',
    transition: 'box-shadow 0.3s',
  };

  const popupOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupContentStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const popupButtonStyle = {
    background: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const openPopup = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={cardStyle}
              onClick={() => openPopup(recipe)}
            >
              <h3>{recipe.recipe_name}</h3>
              <p>Difficulty: {recipe.difficulty_level}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}

      {selectedRecipe && (
        <div
          style={popupOverlayStyle}
          onClick={() => setSelectedRecipe(null)}
        >
          <div style={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={popupButtonStyle} onClick={() => setSelectedRecipe(null)}>
              Fermer
            </button>
            <h2>{selectedRecipe.recipe_name}</h2>
            <p>Catégorie: {selectedRecipe.categorie}</p>
            <p>Description: {selectedRecipe.description}</p>
            <p>Ingrédients: {selectedRecipe.ingredients}</p>
            <p>Instructions: {selectedRecipe.instructions}</p>
            <p>Temps de préparation: {selectedRecipe.preparation_time} minutes</p>
            <p>Temps de cuisson: {selectedRecipe.cooking_time} minutes</p>
            <p>Temps total: {selectedRecipe.total_time} minutes</p>
            <p>Nombre de portions: {selectedRecipe.servings}</p>
            <p>Type de cuisine: {selectedRecipe.cuisine_type}</p>
            <p>Niveau de difficulté: {selectedRecipe.difficulty_level}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

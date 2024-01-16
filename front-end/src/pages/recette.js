import React, { useState, useEffect } from 'react';
import '../App.css';

const backendUrl = 'http://192.168.56.1:2000';

const Recette = () => {
  const [recetteData, setRecetteData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/recette`);

        console.log(response);

        if (!response.ok) {
          throw new Error(`Erreur lors de la requête : ${response.status}`);
        }

        const data = await response.json();
        setRecetteData(data);
      } catch (error) {
        console.error(`Une erreur s'est produite : ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Recette</h1>
      {recetteData ? (
        <div>
          {recetteData.map((recipe) => (
            <div key={recipe.id} style={recipeContainerStyle}>
              <p>ID: {recipe.id}</p>
              <p>Nom de la recette: {recipe.recipe_name}</p>
              {/* Ajoutez d'autres éléments en fonction de votre structure de données */}
            </div>
          ))}
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

const recipeContainerStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px',
};

export default Recette;

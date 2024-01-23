import React, { useState } from 'react';
import Axios from 'axios';

const CreateRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    recipe_name: '',
    categorie: '',
    description: '',
    ingredients: '',
    instructions: '',
    preparation_time: '',
    cooking_time: '',
    total_time: '',
    servings: '',
    cuisine_type: '',
    difficulty_level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleCreateRecipe = async () => {
    try {
      // Envoyer une requête POST au back-end avec les données de la recette
      await Axios.post('http://localhost:2000/recette', recipeData);

      // Réinitialiser les champs après la création réussie
      setRecipeData({
        recipe_name: '',
        categorie: '',
        description: '',
        ingredients: '',
        instructions: '',
        preparation_time: '',
        cooking_time: '',
        total_time: '',
        servings: '',
        cuisine_type: '',
        difficulty_level: '',
      });
    } catch (error) {
      console.error('Erreur lors de la création de la recette:', error);
      // Gérer les erreurs côté front-end si nécessaire
    }
  };

  return (
    <div>
      <input
        type="text"
        name="recipe_name"
        placeholder="Nom de la recette"
        value={recipeData.recipe_name}
        onChange={handleChange}
      />
      <select
        name="categorie"
        value={recipeData.categorie}
        onChange={handleChange}
      >
        <option value="">Sélectionner une catégorie</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat Principal">Plat Principal</option>
        <option value="Dessert">Dessert</option>
        {/* Add more options based on your specific categories */}
      </select>
      <textarea
        name="description"
        placeholder="Description"
        value={recipeData.description}
        onChange={handleChange}
      />
      <textarea
        name="ingredients"
        placeholder="Ingrédients"
        value={recipeData.ingredients}
        onChange={handleChange}
      />
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={recipeData.instructions}
        onChange={handleChange}
      />
      <input
        type="number"
        name="preparation_time"
        placeholder="Temps de préparation (en minutes)"
        value={recipeData.preparation_time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cooking_time"
        placeholder="Temps de cuisson (en minutes)"
        value={recipeData.cooking_time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="total_time"
        placeholder="Temps total (en minutes)"
        value={recipeData.total_time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="servings"
        placeholder="Nombre de portions"
        value={recipeData.servings}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cuisine_type"
        placeholder="Type de cuisine"
        value={recipeData.cuisine_type}
        onChange={handleChange}
      />
      <select
        name="difficulty_level"
        value={recipeData.difficulty_level}
        onChange={handleChange}
      >
        <option value="">Sélectionner le niveau de difficulté</option>
        <option value="Facile">Facile</option>
        <option value="Moyen">Moyen</option>
        <option value="Difficile">Difficile</option>
        {/* Add more options based on your specific difficulty levels */}
      </select>

      <button onClick={handleCreateRecipe}>Créer Recette</button>
    </div>
  );
};

export default CreateRecipe;


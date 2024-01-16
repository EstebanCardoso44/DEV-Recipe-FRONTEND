// Exemple d'utilisation d'Axios dans un composant React
import React, { useState } from 'react';
import Axios from 'axios';

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState('');

  const handleCreateRecipe = async () => {
    try {
      // Envoyer une requête POST au back-end avec le nom de la recette
      await Axios.post('http://localhost:2000/recette', { recipe_name: recipeName });

      // Réinitialiser le champ après la création réussie
      setRecipeName('');
    } catch (error) {
      console.error('Erreur lors de la création de la recette:', error);
      // Gérer les erreurs côté front-end si nécessaire
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nom de la recette"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <button onClick={handleCreateRecipe}>Créer Recette</button>
    </div>
  );
};

export default CreateRecipe;

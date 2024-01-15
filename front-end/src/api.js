import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apirequest = () => {
  const [donnees, setDonnees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setDonnees(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {donnees ? (
        <pre>{JSON.stringify(donnees, null, 2)}</pre>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default Apirequest;

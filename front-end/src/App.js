import React from "react";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Recette from "./pages/recette";
import Apirequest from "./api"
import './App.css'

function App() {
  return (
      <BrowserRouter>
          <div className="navbar">
              <Navbar/>
          </div>
          <div className="api">
             <Apirequest/>
           </div>
              <Routes>
                  <Route exact path="/"  element={<Home></Home>}/>
                  <Route path="Contact" element={<Contact></Contact>}/>
                  <Route path="Recette" element={<Recette></Recette>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;

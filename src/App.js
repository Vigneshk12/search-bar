import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
     
      <SearchBar placeholder="Type Vignesh Here......" data={BookData} />
      <div className="name-container">Graphic Designer 
       </div>
       <div className="types-container"> $ Logo Design, Poster Design, Broucher Design, BusinessCard Design, Video Editing $
       </div>
    </div>
    
  );
}

export default App;

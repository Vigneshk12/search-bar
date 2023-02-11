import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const data = [
    {
      name: "Vignesh",
      service: "Logo Design",
      price: "500 to 1500 INR"
    },
    {
      name: "Vignesh",
      service: "Flyer Design",
      price: "500 to 2000 INR"
    },
    {
      name: "Vignesh",
      service: "Advertisement Design",
      price: "300 to 1000 INR"
    },
    {
      name: "Vignesh",
      service: "Brochure Design",
      price: "600 to 2000 INR"
    },
    {
      name: "Vignesh",
      service: "Business Card Design",
      price: "200 to 1000 INR"
    },
    {
      name: "Vignesh",
      service: "Poster Design",
      price: "150 to 1000 INR"
    },
    {
      name: "Vignesh",
      service: "Banner Design",
      price: "200 to 1000 INR"
    },
    {
      name: "Vignesh",
      service: "30 Sec Video Editing Footage",
      price: "500 to 1000 INR"
    },
  ];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.service.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="dataItem">
               
                <p className="service">
                  Service: {value.service}
                </p>
                <p>
                  Price: {value.price}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

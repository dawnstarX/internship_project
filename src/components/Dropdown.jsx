import React, { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const languageArray = ["English", "Hindi", "French", "Japanese"];

  return (
    <div>
      <label>View in: </label>
      <select
        style={{ backgroundColor: "white" }}
        value={selectedLanguage}
        onChange={handleChange}
      >
        {languageArray.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSelector;

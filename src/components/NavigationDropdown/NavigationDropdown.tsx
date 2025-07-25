import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationDropdown: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="/">Home</option>
      <option value="/transliterator">Transliterator</option>
      <option value="/baybayin">Baybayin</option>
      <option value="/baybayin-lite">Baybayin Lite</option>
      <option value="/aurebesh">Aurebesh</option>
      <option value="/deseret">Deseret</option>
    </select>
  );
};

export default NavigationDropdown;

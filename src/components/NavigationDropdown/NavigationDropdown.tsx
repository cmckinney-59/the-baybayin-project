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
      <option value="/transliterator/baybayin">Baybayin</option>
      <option value="/transliterator/baybayin-lite">Baybayin Lite</option>
      <option value="/transliterator/aurebesh">Aurebesh</option>
      <option value="/transliterator/deseret">Deseret</option>
    </select>
  );
};

export default NavigationDropdown;

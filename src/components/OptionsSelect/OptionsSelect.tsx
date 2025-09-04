import React from "react";
import "./OptionsSelect.scss";

interface OptionsSelectProps {
  onChange: (value: string) => void;
  options: string[];
  title: string;
}

const OptionsSelect: React.FC<OptionsSelectProps> = ({
  onChange,
  options,
  title,
}) => {
  return (
    <div className="select-container">
      <select
        className="select-input"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{title}</option>
        {options.map((option, Index) => (
          <option key={Index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsSelect;

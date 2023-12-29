"use client"
import React, { useState } from 'react';
import Select, { ValueType } from 'react-select';

const MenuSelector: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<option[]>([]);
  
  type option = {
    value: string;
    label: string;
  };

  const options: option[] = [
    { value: "breakfast", label: "breakfast" },
    { value: "lunch", label: "lunch" },
    { value: "snacks", label: "snacks" },
    { value: "starter", label: "starter" },
    { value: "dessert", label: "dessert" },
  ];

  const handleSelection = (selected: ValueType<option>) => {
    // Ensure the selected value is an array of options
    if (Array.isArray(selected)) {
      setSelectedFilter(selected);
    }
  };

  return (
    <div className="">
      <Select
        defaultValue={options[0]}
        onChange={handleSelection}
        options={options}
        isMulti
      />
    </div>
  );
};

export default MenuSelector;

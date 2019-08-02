import React from "react";

const FilterButton = ({text, isActive}) => (
    isActive?<span className="filter-active">{text}</span>:
    <button className="filter-button">{text}</button>
);

export default FilterButton;

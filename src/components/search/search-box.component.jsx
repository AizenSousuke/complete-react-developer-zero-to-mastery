import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
	<>
		<h2>Search</h2>
		<input
			type="search"
			className="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	</>
);

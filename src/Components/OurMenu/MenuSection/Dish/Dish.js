import React from "react";

function Dish(props) {
	return (
		<div className='dish-container'>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<button className='price-button'>£{props.price}</button>
		</div>
	);
}

export default Dish;

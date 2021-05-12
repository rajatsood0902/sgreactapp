import React from "react";
import Dish from "./Dish/Dish";

function MenuSection(props) {
	console.log(props.dishes);
	return (
		<div className='menu-section'>
			<h2>{props.title}</h2>

			{props.dishes.length > 0 ? (
				props.dishes.map((dish) => {
					return (
						<Dish
							title={dish.title}
							description={dish.description}
							price={dish.price}></Dish>
					);
				})
			) : (
				<p>no data</p>
			)}
		</div>
	);
}

export default MenuSection;

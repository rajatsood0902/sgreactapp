import React from "react";
import MenuSection from "./MenuSection/MenuSection";

function OurMenu() {
	const dishes_db = [
		{
			starters: {
				title: "starters",
				dishes: [
					{
						title: "Quinoa Croquettas",
						description:
							"Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
						price: "4.95",
					},
					{
						title: "Chifa Chicharrones",
						description: "Slow cooked, crispy pork belly with sweet soy sauce",
						price: "6.95",
					},
					{
						title: "Calamares",
						description: "Crispy baby squid with pickled jalapeño miso salsa",
						price: "6.95",
					},
				],
			},
		},
		{
			mainCourses: {
				title: "Main Courses",
				dishes: [
					{
						title: "El Clasico",
						description:
							"Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)",
						price: "8.95",
					},
					{
						title: "Tiradito Callao",
						description:
							"Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies",
						price: "8.95",
					},
				],
			},
		},
		{
			sides: {
				title: "Sides",
				dishes: [
					{
						title: "Super Pollo",
						description: "Marinated corn fed chicken pieces with rocotto salsa",
						price: "4.95",
					},
					{
						title: "Patatas Fritas",
						description: "Sweet potato fries with aji rocotto mayonnaise (v)",
						price: "3.95",
					},
				],
			},
		},
		{
			desserts: {
				title: "Desserts",
				dishes: [
					{
						title: "Icecream",
						description: "Lorem ipsum dolor sit amet salerma petrum sea",
						price: "3.95",
					},
					{
						title: "Tiramisu",
						description: "Lorem ipsum dolor sit amet salerma petrum sea",
						price: "3.95",
					},
					{
						title: "Chocolate Brownie",
						description: "Lorem ipsum dolor sit amet salerma petrum sea",
						price: "3.95",
					},
				],
			},
		},
	];

	return (
		<section id='menu' className='menu-container flex'>
			<h3>
				Our Menu <span className='line-through'></span>
			</h3>
			<button>Know More</button>
			<div className='menu-sections'>
				<MenuSection
					title={dishes_db[0].starters.title}
					dishes={dishes_db[0].starters.dishes}></MenuSection>
				<MenuSection
					title={dishes_db[1].mainCourses.title}
					dishes={dishes_db[1].mainCourses.dishes}></MenuSection>
				<MenuSection
					title={dishes_db[2].sides.title}
					dishes={dishes_db[2].sides.dishes}></MenuSection>
				<MenuSection
					title={dishes_db[3].desserts.title}
					dishes={dishes_db[3].desserts.dishes}></MenuSection>
			</div>
		</section>
	);
}

export default OurMenu;

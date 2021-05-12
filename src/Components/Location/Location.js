import React from "react";

function Location() {
	return (
		<section id="location" className='location-container'>
		<div className="location-info-container">
			<h3><span>Location</span></h3>
			<p>12 Upper St. Martin’s Lane WC2H 9FB, London</p>
		</div>
			<iframe
				title='map'
				src='https://snazzymaps.com/embed/311275'
				width='100%'
				height='500px'
				style={{ border: "none" }}></iframe>
		</section>
	);
}

export default Location;

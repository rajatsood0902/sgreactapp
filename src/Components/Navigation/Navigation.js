import React from "react";

function Navigation() {
	return (
		<nav className='navigation-bar'>
			<ul className='nav-left'>
				<li>
					<a href='#homepage'>Logo</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href='#community'>Community</a>
				</li>
				<li>
					<a href='#location'>Location</a>
				</li>
				<li>
					<a href='#menu'>Our menu</a>
				</li>
				<li>
					<a href=''>Recipes</a>
				</li>
			</ul>
			<ul className='nav-right'>
				<li>
					<a href='#form'>Contact</a>
				</li>
				<li>
					<a href=''>Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;

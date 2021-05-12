import React from "react";

function Footer() {
	return (
		<section className='footer-container flex'>
		<div className="footer-container-box flex">
			<div className='footer-box flex'>
				<div>
					<ul>
						<li>Section 1</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
					</ul>
					<ul>
						<li>Section 2</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
					</ul>
					<ul>
						<li>Section 3</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
					</ul>
					<ul>
						<li>Section 4</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
					</ul>
					<ul>
						<li>Section 5</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
						<li>Subsection</li>
					</ul>
				</div>

				<div>
					<h3>
						This is the <span>logo</span>
					</h3>
				</div>
			</div>
			<div className='social-media-footer'>
				<p>
					2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor.
				</p>
				<div className="social-media-icon-container">
					<div className="facebook-icon"></div>
					<div className="twitter-icon"></div>
					<div className="instagram-icon"></div>
					<div className="linkedin-icon"></div>
					<div className="dribbble-icon"></div>
				</div>
			</div>
			</div>
		</section>
	);
}

export default Footer;

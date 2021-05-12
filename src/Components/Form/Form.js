import React from "react";

function Form() {
	return (
		<section id="form" className='form-container flex'>
		<div className="form-wrapper flex">
			<div>
				<article>
					<h2>
						Collaborate{" "}
						<span>
							with us <span className='line-through'></span>
						</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore
					</p>
				</article>
			</div>
			<div>
				<span className='social-media-detail'></span>
				<form action=''>
					<ul>
						<li>
							<p>Name</p>
							<input type='Name' placeholder='Name' />
						</li>
						<li>
							<p>Phone</p>
							<input type='Phone' placeholder='Phone' />
						</li>
						<li>
							<p>Where did you hear about us?</p>
							<select>
								<option className='placeholder'>Select</option>
							</select>
						</li>
					</ul>
					<ul>
						<li>
							<p>Surname</p>
							<input type='Surname' placeholder='Surname' />
						</li>
						<li>
							<p>Email Address</p>
							<input type='Email' placeholder='Email' />
						</li>
						<li>
							<p>Where did you hear about us?</p>
							<select>
							<option className='placeholder'>Select</option>
							</select>
						</li>
						<button>Send</button>
					</ul>
				</form>
			</div>
			</div>
		</section>
	);
}

export default Form;

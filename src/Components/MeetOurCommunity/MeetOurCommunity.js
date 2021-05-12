import React from "react";
import SocialMedia from "../MeetOurCommunity/SocialMedia/SocialMedia";
import SocialPost from "../MeetOurCommunity/SocialPost/SocialPost";

function MeetOurCommunity() {
	return (
		<section id="community" className='community-container'>
			<div className='community'>
				<h3>
					Meet Our Community <span className='line-through'></span>
				</h3>
				<button>Know More</button>
				<p>
					Lorem ipsum dolor sit amet ernut tempartero sertu nabore en torna
					entalto
				</p>
			</div>
			<div className='flex social-media-container'>
			<div className='social-media-detail2'></div>
			<div className="social-media-detail1"></div>
				<SocialMedia image='1'></SocialMedia>
				<SocialPost
					title='@tbuzzfeedfood'
					post="It's taco Tuesday! These tacos from @jesseszewczyk have no added sugars
				and are SO good. Find the recipe from the link in our bio!
				@taylormillerphoto"
					comments='60'
					likes='14.7K'></SocialPost>
			</div>
			<div className='flex social-media-container'>
			<div className='social-media-detail3'></div>
				<SocialPost
					title='@love_food'
					post='Waffle sticks in Copenhagen! Milk Chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [@foodwithmichel] #lovefood'
					comments='789'
					likes='99.7K'></SocialPost>
				<SocialMedia image='2'></SocialMedia>
			</div>
			<div className='flex social-media-container'></div>
			<div className='flex social-media-container'>
				<div className='social-post' style={{marginTop : 60 , boxShadow : "none"}}>
					<p className='buzzfeed post-specs'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
						aute irure
					</p>
				</div>
			</div>
			<div className='flex social-media-container'>
				<SocialPost
					title='@buzzfeedfood'
					post='Getting into long weekend mode like #pancitpalabok (@jeepneynyc)'
					comments='152'
					likes='18.2K'></SocialPost>
				<SocialMedia image='3'></SocialMedia>
			</div>
		</section>
	);
}

export default MeetOurCommunity;

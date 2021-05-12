import React from "react";
import image1 from "../../../img/social-media-img-1.png";
import image2 from "../../../img/social-media-img-2.png";
import image3 from "../../../img/social-media-img-3.png";

function SocialMedia(props) {
	function getImage(imageNumber) {
		switch (imageNumber) {
			case "1":
				return image1;
				break;
			case "2":
				return image2;
				break;
			case "3":
				return image3;
				break;
			default:
				return image2;
				break;
		}
	}

	return (
		<div className='social-media'>
			<div
				style={{ backgroundImage: `url(${getImage(props.image)})` }}
				className='social-media-img'></div>
			<div className='social-media-icon'></div>
		</div>
	);
}

export default SocialMedia;

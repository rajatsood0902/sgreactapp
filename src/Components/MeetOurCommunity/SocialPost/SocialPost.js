import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faHeart } from "@fortawesome/free-solid-svg-icons";

function SocialPost(props) {
	return (
		<div className='social-post'>
			<p className="buzzfeed">{props.title}</p>
			<p className="buzzfeedpost">{props.post}</p>
      <div className="social-media-clicks">
			<FontAwesomeIcon color='#333333' icon={faCommentAlt} />
      <p>{props.comments}</p>
			<FontAwesomeIcon color='#333333' icon={faHeart} style={{marginLeft: 15}}/>
      <p>{props.likes}</p>
      </div>
		</div>
	);
}

export default SocialPost;

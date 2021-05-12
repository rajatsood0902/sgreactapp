import React, { useEffect, useState } from "react";

function ScrollSpy(props) {
	const [windowTopOffSet, setWindowTopOffSet] = useState(0);
	const [numberClass, setNumberClass] = useState("");

	function handleOfScroll() {
		setWindowTopOffSet(window.pageYOffset);
	}

	useEffect(() => {
		
		document.addEventListener("scroll", handleOfScroll);

		getClass();

		return () => {
			document.removeEventListener("scroll", handleOfScroll);
		};
	}, [numberClass, windowTopOffSet]);

	useEffect(()=>{
		handleOfScroll();
	}, [])


	function getIdSection() {
		if (props.elementsTopOffSet !== undefined) {
			if (
				windowTopOffSet >= props.elementsTopOffSet[0].topOffset &&
				windowTopOffSet < props.elementsTopOffSet[1].topOffset
			) {
				return 1;
			} else if (
				windowTopOffSet >= props.elementsTopOffSet[1].topOffset &&
				windowTopOffSet < props.elementsTopOffSet[2].topOffset
			) {
				return 2;
			} else if (
				windowTopOffSet >= props.elementsTopOffSet[2].topOffset &&
				windowTopOffSet < props.elementsTopOffSet[3].topOffset
			) {
				return 3;
			} else if (
				windowTopOffSet >= props.elementsTopOffSet[3].topOffset &&
				windowTopOffSet < props.elementsTopOffSet[4].topOffset
			) {
				return 4;
			} else if (
				windowTopOffSet >= props.elementsTopOffSet[4].topOffset &&
				windowTopOffSet < props.elementsTopOffSet[4].topOffset + 785
			) {
				return 5;
			}
		}
	}

	function getClass() {
		switch (getIdSection()) {
			case 1:
				setNumberClass("homepage-offset");
				break;
			case 2:
				setNumberClass("community-offset");
				break;
			case 3:
				setNumberClass("location-offset");
				break;
			case 4:
				setNumberClass("menu-offset");
				break;
			case 5:
				setNumberClass("form-offset");
				break;
			default:
				break;
		}
	}

	return (
		<div className={`scroll-spy`}>

					<span class={numberClass}>0{getIdSection()}
					<div className="line-through"></div></span>
			<span className='info-request'>
				<p>Request Info</p>
			</span>
		</div>
	);
}

export default ScrollSpy;

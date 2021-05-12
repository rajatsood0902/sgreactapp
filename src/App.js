import { useState, useEffect } from "react";
import "./styles/css/main.css";
import Layout from "./Components/Layout/Layout";
import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Components/Homepage/Homepage";
import MeetOurCommunity from "./Components/MeetOurCommunity/MeetOurCommunity";
import Location from "./Components/Location/Location";
import OurMenu from "./Components/OurMenu/OurMenu";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import ScrollSpy from "./Components/ScrollSpy/ScrollSpy";

function App() {
	const [elementsTopOffSet, setElementsTopOffSet] = useState(undefined);

	useEffect(() => {
		if (elementsTopOffSet === undefined) {
			const homepage = document.getElementById("homepage");
			const community = document.getElementById("community");
			const location = document.getElementById("location");
			const menu = document.getElementById("menu");
			const form = document.getElementById("form");

			const data = [
				{
					section: "homepage",
					topOffset: homepage.offsetTop,
				},
				{
					section: "community",
					topOffset: community.offsetTop,
				},
				{
					section: "location",
					topOffset: location.offsetTop,
				},
				{
					section: "menu",
					topOffset: menu.offsetTop,
				},
				{
					section: "form",
					topOffset: form.offsetTop,
				},
			];

			setElementsTopOffSet(data);
			console.log(data);
		}
	});

	return (
		<Layout>
			<Navigation></Navigation>
			<ScrollSpy elementsTopOffSet={elementsTopOffSet}></ScrollSpy>
			<Homepage></Homepage>
			<MeetOurCommunity></MeetOurCommunity>
			<Location></Location>
			<OurMenu></OurMenu>
			<Form></Form>
			<Footer></Footer>
		</Layout>
	);
}

export default App;

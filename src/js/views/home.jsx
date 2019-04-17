import React from "react";
import "../../styles/home.css";
import { Jumbotron, Container } from "reactstrap";
import HomeCarousel from "../component/Carousel.jsx";
import BlogCard from "../component/BlogCards.jsx";
const Home = props => {
	
	// let post = fetch("https://assets.breatheco.de/apis/fake/posts" + this.props.params)
	// 			.then(response => {
	// 				if (response.status !== 200) {
	// 					alert("Connection error, status " + response.status);
	// 					return;
	// 				}

	// 				response.json().then(data => {
	// 					let store = this.state.store;
	// 					store.meetups = data;
	// 					this.setState({ store });
	// 				});
	// 			})
	// 			.catch(err => {
	// 				alert("Fetch error: ", err);
	// 			});
	
	
	return (
		<div>
			<Jumbotron fluid id="jumboHome">
				<Container fluid>
					<h1 className="display-3">A song of Ice and Fire</h1>
					<p className="lead">
						Reading the books that inspired the sensational show
					</p>
				</Container>
			</Jumbotron>
			<BlogCard />
			<HomeCarousel />
		</div>
	);
};

export default Home;

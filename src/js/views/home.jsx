import React from "react";
import "../../styles/home.css";
import { Jumbotron, Container } from "reactstrap";
import HomeCarousel from "../component/Carousel.jsx";
import BlogCard from "../component/BlogCards.jsx";
import { Context } from "../store/appContext.jsx";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import MainBlog from "../views/Mainblog.jsx";

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

	// create 2 aux variables mapping into jumbotron and cards

	return (
		<Context.Consumer>
			{({ store, actions }) => {
				const jumboData = store.blogcards[0];
				console.log(jumboData);
				const blogCardsData = store.blogcards.slice(1, 4);
				return (
					<div>
						{typeof jumboData !== "undefined" ? (
							<MainBlog
								image={jumboData.acf.image}
								title={jumboData.post_title}
								content={jumboData.post_content}
							/>
						) : (
							<MainBlog image="" title="" content="" />
						)}{" "}
						<Row
							className="justify-content-center mb-2"
							id="blogCardRow"
							key="1">
							{blogCardsData.map(blog => {
								return (
									<BlogCard
										key={blog.ID}
										image={blog.acf.image || ""}
										title={blog.post_title}
										content={blog.post_content}
										footer={blog.post_date}
									/>
								);
							})}
						</Row>
						<HomeCarousel />
					</div>
				);
			}}
		</Context.Consumer>
	);
};
export default Home;

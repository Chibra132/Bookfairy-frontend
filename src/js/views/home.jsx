import React from "react";
import "../../styles/home.css";
import { Jumbotron, Container } from "reactstrap";
import HomeCarousel from "../component/Carousel.jsx";
import BlogCard from "../component/BlogCards.jsx";
import { Context } from "../store/appContext.jsx";

const Home = props => {
	// create 2 aux variables mapping into jumbotron and cards

	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return (
					<div>
						<Jumbotron fluid id="jumboHome">
							<Container fluid>
								<h1 className="display-3">
									A song of Ice and Fire
								</h1>
								<p className="lead">
									Reading the books that inspired the
									sensational show
								</p>
							</Container>
						</Jumbotron>
						{/*console.log(store);*/}
						{store.blogcards.map(blog => {
							return (
								<BlogCard
									key={blog.ID}
									image={blog.post_author}
									title={blog.post_title}
									content={blog.post_content}
									footer={blog.post_date}
								/>
							);
						})}
						<HomeCarousel />
					</div>
				);
			}}
		</Context.Consumer>
	);
};
export default Home;

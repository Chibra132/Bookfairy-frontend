import React from "react";
import "../../styles/home.css";
import { Jumbotron, Container } from "reactstrap";
import BlogCard from "../component/BlogCards.jsx";
import { Context } from "../store/appContext.jsx";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import MainBlog from "../views/Mainblog.jsx";

const Home = props => {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				const jumboData = store.blogcards[0];
				console.log(jumboData);
				const blogCardsData = store.blogcards.slice(1, 5);
				return (
					<div className="bg-dark">
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
										content={blog.post_content.slice(0, 50)}
										footer={blog.post_date}
									/>
								);
							})}
						</Row>
					</div>
				);
			}}
		</Context.Consumer>
	);
};
export default Home;

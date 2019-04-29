import PropTypes from "prop-types";
import { Jumbotron, Container } from "reactstrap";
import React from "react";

const MainBlog = props => {
	return (
		<Jumbotron
			fluid
			id="jumboHome"
			style={{
				background:
					"url(https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2015%2F07%2FRoberts-Rebellion-1.jpg&c=sc&w=850&h=560) center"
			}}>
			<Container fluid>
				<h1 className="display-3">{props.title}</h1>
				<p className="lead">{props.content}</p>
			</Container>
		</Jumbotron>
	);
};

MainBlog.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	footer: PropTypes.string
};

export default MainBlog;

import PropTypes from "prop-types";
import { Jumbotron, Container } from "reactstrap";
import React from "react";
import "../../styles/home.css";

const MainBlog = props => {
	return (
		<Jumbotron
			fluid
			id="jumboHome"
			style={{
				background: `url(${props.image}) center`
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

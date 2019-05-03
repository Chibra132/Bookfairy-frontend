import React from "react";
import {
	Card,
	CardBody,
	Button,
	CardTitle,
	CardText,
	CardImg,
	CardHeader,
	CardFooter,
	Jumbotron,
	Container,
	Row,
	Col
} from "reactstrap";
import "../../styles/BlogCards.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = props => {
	return (
		<Col xs={12} s={4} md={3}>
			<Card className="border-bottom-0" id="blogcard">
				<Link to={"/blogpage/" + props.ID}>
					<CardImg
						top
						width="100%"
						src={props.image}
						alt="Card image cap"
					/>
				</Link>
				<CardBody>
					<CardTitle>{props.title}</CardTitle>
					<CardText>{props.content}</CardText>
					<CardText>
						<small className="text-muted">{props.footer}</small>
					</CardText>
				</CardBody>
			</Card>
		</Col>
	);
};

BlogCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	footer: PropTypes.string,
	ID: PropTypes.number
};
export default BlogCard;

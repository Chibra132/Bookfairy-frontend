import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogPost = props => {
	return (
		<div className="container">
			<div className="well">
				<div className="media">
					<a className="pull-left" href="#">
						<Link to={"/blogpage/" + props.ID}>
							{" "}
							<img
								className="media-object"
								src={props.image}
							/>{" "}
						</Link>
					</a>
					<div className="media-body">
						<h4 className="media-heading">{props.title}</h4>
						<p className="text-right">By Noobs</p>

						<p>{props.content}</p>
						<ul className="list-inline list-unstyled">
							<li>
								<span>
									<i className="glyphicon glyphicon-calendar" />{" "}
									{props.footer}{" "}
								</span>
							</li>
							<li>|</li>
							<span>
								<i className="glyphicon glyphicon-comment" />{" "}
							</span>
							<li>|</li>
							{/*<li>
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star" />
										<span className="glyphicon glyphicon-star-empty" />
									</li>*/}
							<li>|</li>
							<li>
								{/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
								{/*	<span>
											<i className="fa fa-facebook-square" />
										</span>
										<span>
											<i className="fa fa-twitter-square" />
										</span>
										<span>
											<i className="fa fa-google-plus-square" />
										</span>*/}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

BlogPost.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	footer: PropTypes.string,
	ID: PropTypes.string
};

export default BlogPost;

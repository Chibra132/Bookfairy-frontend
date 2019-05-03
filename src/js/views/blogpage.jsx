import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import BlogPost from "../component/BlogPost.jsx";

export default class BlogPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						let blog = store.blogcards.find(
							blog => blog.ID == this.props.match.params.theid
						);

						return (
							<div>
								<BlogPost
									key={blog.ID}
									image={blog.acf.image || ""}
									title={blog.post_title}
									content={blog.post_content}
									footer={blog.post_date}
									ID={blog.ID}
								/>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

BlogPage.propTypes = {
	match: PropTypes.object
};

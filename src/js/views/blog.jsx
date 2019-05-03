import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BlogPost from "../component/BlogPost.jsx";

export class Blogs extends React.Component {
	render(props) {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const blogPostData = store.blogcards;

					return (
						<div>
							{blogPostData.map(blog => {
								return (
									<BlogPost
										key={blog.ID}
										image={blog.acf.image || ""}
										title={blog.post_title}
										content={blog.post_content}
										footer={blog.post_date}
										ID={blog.ID}
									/>
								);
							})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

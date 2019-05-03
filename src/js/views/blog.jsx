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
							<link
								href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
								rel="stylesheet"
								id="bootstrap-css"
							/>
							{/*---- Include the above in your HEAD tag --------*/}
							<link
								rel="stylesheet"
								href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"
							/>
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

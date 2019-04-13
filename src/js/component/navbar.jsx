import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						React Webapp Boilerplate
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/blog/1">
						<button className="btn btn-primary">
							Home to Bookfairy
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}

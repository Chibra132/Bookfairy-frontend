import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						The Bookishfairy
					</span>
				</Link>

				<Link to="/blog/1">
					<button className="btn btn-primary">
						Home to Bookishfairy
					</button>
				</Link>

				<Link to="/Product/1">
					<button className="btn btn-primary">Merch</button>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">Buy me coffee</button>
				</Link>
			</nav>
		);
	}
}

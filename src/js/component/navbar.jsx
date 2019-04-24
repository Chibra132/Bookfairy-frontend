import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar text-light bg-info mb-3">
				<a
					className="navbar-brand"
					href="https://encrypted-tbn0.gstatic.com"
				/>
				<Link to="/">
					<span className="text-light font-italic h2">
						The Bookish Fairy
					</span>
				</Link>

				<Link to="/">
					<button className="btn bg-secondary">
						Home to Bookishfairy
					</button>
				</Link>

				<Link to="/Product/1">
					<button className="btn bg-secondary">Merch</button>
				</Link>
				<Link to="/Blog/1">
					<button className="btn bg-secondary">Read about me</button>
				</Link>
				<Link to="/Archive">
					<button className="btn bg-secondary">Archive</button>
				</Link>
			</nav>
		);
	}
}

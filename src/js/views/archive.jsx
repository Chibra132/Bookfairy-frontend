import React from "react";
import { Context } from "../store/appContext.jsx";

export class Archive extends React.Component {
	render() {
		return (
			<div className="">
				<h1 className="display-4 font-italic"> Archive </h1>
				<ul>
					<li>Blog 1</li>
					<li>Blog 2</li>
					<li>Blog 3</li>
				</ul>
			</div>
		);
	}
}

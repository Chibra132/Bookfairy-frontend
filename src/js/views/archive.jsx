import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ArchiveItem from "../component/ArchiveItem.jsx";
import { Context } from "../store/appContext.jsx";

export default class Archive extends React.Component {
	render(props) {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const ArchiveData = store.blogcards;
					return (
						<ListGroup>
							{ArchiveData.map(archive => {
								return (
									<ArchiveItem
										key={archive.ID}
										title={archive.post_title}
									/>
								);
							})}
						</ListGroup>
					);
				}}
			</Context.Consumer>
		);
	}
}

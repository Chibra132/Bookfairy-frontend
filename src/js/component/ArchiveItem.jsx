import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";

const ArchiveItem = props => {
	return (
		<ListGroupItem>
			<p> {props.title} </p>
		</ListGroupItem>
	);
};

ArchiveItem.propTypes = {
	title: PropTypes.string,
	ID: PropTypes.number
};
export default ArchiveItem;

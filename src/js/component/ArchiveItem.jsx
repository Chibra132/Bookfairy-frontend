import React from 'react';
import PropTypes from "prop-types";

const ArchiveItem = props => {
	return (
	    <p> {props.title} </p>
	    );
}

ArchiveItem.propTypes = {
	title: PropTypes.string,
	
};
export default ArchiveItem;
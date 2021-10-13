import React from "react";
import classes from "./PeepItem.module.css";

const PeepItem = (props) => {
	return (
		<li className={classes.peep}>
			<div>
				<h3>{props.body}</h3>
				<h4>{props.author}</h4>
				<h5>{props.likes}</h5>
			</div>
		</li>
	);
};

export default PeepItem;

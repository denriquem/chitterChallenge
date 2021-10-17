import React, { useContext } from "react";
import classes from "./PeepItem.module.css";
import AuthContext from "../../store/auth-context";

const PeepItem = (props) => {
	const authCtx = useContext(AuthContext);

	const clickPeepHandler = (peepID) => {
		authCtx.storePeepID(peepID);
	};

	return (
		<li className={classes.peep}>
			<div>
				<h3>{props.body}</h3>
				<h4>{props.author}</h4>
				<h5>{props.likes}</h5>
				<button onClick={clickPeepHandler(props.id)}>View Peep</button>
			</div>
		</li>
	);
};

export default PeepItem;

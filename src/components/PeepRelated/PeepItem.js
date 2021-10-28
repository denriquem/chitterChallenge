import React, { useContext, useState } from "react";
import classes from "./PeepItem.module.css";
import AuthContext from "../../store/auth-context";
import { Redirect } from "react-router-dom";
import axios from "axios";

const PeepItem = (props) => {
	const authCtx = useContext(AuthContext);
	const samePeep = props.samePeep;

	const [redirect, setRedirect] = useState(false);

	const clickPeepHandler = (peepID, e) => {
		e.preventDefault();
		authCtx.storePeepID(peepID);
		setRedirect(true);
	};

	const deletePeepHandler = () => {
		props.onDeletePeep(props.id, authCtx.token);
	};

	if (redirect) {
		return <Redirect to={`peep/${props.id}`} />;
	}

	return (
		<li className={classes.peep}>
			<div>
				<h3>{props.body}</h3>
				<h4>{props.author}</h4>
				<h5>{props.likes}</h5>
				<button onClick={(e) => clickPeepHandler(props.id, e)}>
					View Peep
				</button>
				{samePeep && <button onClick={deletePeepHandler}>Delete Peep</button>}
			</div>
		</li>
	);
};

export default PeepItem;

import React, { useContext, useState } from "react";
import classes from "./PeepItem.module.css";
import AuthContext from "../../store/auth-context";
import { Redirect } from "react-router-dom";
import axios from "axios";

const PeepItem = (props) => {
	const authCtx = useContext(AuthContext);

	const [redirect, setRedirect] = useState(false);

	const clickPeepHandler = (peepID, e) => {
		e.preventDefault();

		authCtx.storePeepID(peepID);

		setRedirect(true);
	};

	const deletePeepHandler = async () => {
		console.log("delete peep handler");

		try {
			const config = {
				headers: {
					Authorization: `Token token=${authCtx.token}`,
				},
			};

			let response = await axios.delete(
				`https://chitter-backend-api-v2.herokuapp.com/peeps/${props.id}`,
				config
			);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
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
				<button onClick={deletePeepHandler}>Delete Peep</button>
			</div>
		</li>
	);
};

export default PeepItem;

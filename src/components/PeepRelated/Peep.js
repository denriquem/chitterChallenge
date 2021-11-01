import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import classes from "./Peep.module.css";

const Peep = () => {
	const authCtx = useContext(AuthContext);

	const postID = authCtx.peepID;
	const [peep, setPeep] = useState("");
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const getPeep = async (postID) => {
			try {
				let response = await axios.get(
					`https://chitter-backend-api-v2.herokuapp.com/peeps/${postID}`
				);

				let newPeepObj = {
					body: response.data.body,
					handle: response.data.user.handle,
					likes: response.data.likes.length,
				};

				setPeep(newPeepObj);
			} catch (err) {
				console.log(err);
			}
		};

		getPeep(postID);
	}, []);

	const clickBackHandler = () => {
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to="/" />;
	}

	return (
		<li className={classes.peep}>
			<div>
				<h3>{peep.body}</h3>
				<h4>{peep.handle}</h4>
				<h5>{`Likes: ${peep.likes}`}</h5>
				<button onClick={clickBackHandler}>Back to Chitter Feed</button>
			</div>
		</li>
	);
};

export default Peep;

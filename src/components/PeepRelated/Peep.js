import React, { useEffect, useState, useContext, Fragment } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import classes from "./Peep.module.css";

const Peep = () => {
	const authCtx = useContext(AuthContext);

	console.log(authCtx);

	const postID = authCtx.peepID;
	const [peep, setPeep] = useState("");

	useEffect(() => {
		const getPeep = async (postID) => {
			try {
				let response = await axios.get(
					`https://chitter-backend-api-v2.herokuapp.com/peeps/${postID}`
				);

				// let flattened = response.data.map((peep) => {
				// 	return {
				// 		body: peep.body,
				// 		handle: peep.user.handle,
				// 		likes: peep.likes.length,
				// 	};
				// });

				let newPeepObj = {
					body: response.data.body,
					handle: response.data.user.handle,
					likes: response.data.likes.length,
				};

				setPeep(newPeepObj);
				console.log(response.data);
				console.log(newPeepObj);
			} catch (err) {
				console.log(err);
			}
		};

		getPeep(postID);
	}, []);

	return (
		<li className={classes.peep}>
			<div>
				<h3>{peep.body}</h3>
				<h4>{peep.handle}</h4>
				<h5>{`Likes: ${peep.likes}`}</h5>
			</div>
		</li>
	);
};

export default Peep;

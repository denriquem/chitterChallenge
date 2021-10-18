import React, { useEffect, useState, useContext, Fragment } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";

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
				console.log(response);
				console.log(response.data.body);
				setPeep(response.data.body);
			} catch (err) {
				console.log(err);
			}
		};

		getPeep(postID);
	});

	return (
		<Fragment>
			<h1>Hello</h1>
			<div>{peep}</div>
		</Fragment>
	);
};

export default Peep;

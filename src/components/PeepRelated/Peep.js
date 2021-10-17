import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import PeepItem from "../PeepRelated/PeepItem";

const Peep = (params) => {
	const postID = params.id;
	const [peep, setPeep] = useState("");

	useEffect(() => {
		const getPeep = async (postID) => {
			try {
				let response = await axios.get(
					`https://chitter-backend-api-v2.herokuapp.com/peeps/${postID}`
				);
				console.log(response);
				setPeep(response.body);
			} catch (err) {
				console.log(err);
			}
		};

		getPeep(postID);
	});

	return <Fragment></Fragment>;
};

export default Peep;

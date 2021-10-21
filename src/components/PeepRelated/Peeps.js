import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Peeps.module.css";
import PeepItem from "./PeepItem";
import Card from "../UI/Card";

const Peeps = (props) => {
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		const fetchPeeps = async () => {
			try {
				const response = await axios.get(
					"https://chitter-backend-api-v2.herokuapp.com/peeps"
				);
				console.log("hello there");
				let loadedPeeps = response.data;
				console.log(loadedPeeps);

				let flattened = loadedPeeps.map((peep) => {
					return {
						id: peep.id,
						body: peep.body,
						userHandle: peep.user.handle,
						userID: peep.user.id,
					};
				});

				console.log(flattened);

				setPeeps(flattened);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPeeps();
	}, []);

	const peepList = peeps.map((peep) => {
		return (
			<PeepItem
				id={peep.id}
				key={peep.id}
				body={peep.body}
				author={peep.userHandle}
				likes={peep.likes}
			/>
		);
	});

	console.log(peepList);

	return (
		<section className={classes.peeps}>
			<button className={classes.buttonPosition} onClick={props.onShowAddPeep}>
				Add Peep
			</button>
			<Card>
				<ul>{peepList}</ul>
			</Card>
		</section>
	);
};

export default Peeps;

import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Peeps.module.css";
import PeepItem from "./PeepItem";
import Card from "../UI/Card";

const Peeps = (props) => {
	const [peeps, setPeeps] = useState([]);

	const fetchPeeps = async () => {
		try {
			const response = await axios.get(
				"https://chitter-backend-api-v2.herokuapp.com/peeps"
			);
			let loadedPeeps = response.data;

			let flattened = loadedPeeps.map((peep) => {
				return {
					id: peep.id,
					body: peep.body,
					userHandle: peep.user.handle,
					userID: peep.user.id,
				};
			});
			setPeeps(flattened);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPeeps();
	}, []);

	const deletePeepHandler = async (peepId, token) => {
		console.log("deleting Peep from the big Peep");
		console.log(peepId);
		console.log(token);

		try {
			const config = {
				headers: {
					Authorization: `Token token=${token}`,
				},
			};

			let response = await axios.delete(
				`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`,
				config
			);
			console.log(response);
			fetchPeeps();
		} catch (err) {
			console.log(err);
		}
	};

	const peepList = peeps.map((peep) => {
		return (
			<PeepItem
				id={peep.id}
				key={peep.id}
				body={peep.body}
				author={peep.userHandle}
				likes={peep.likes}
				onDeletePeep={deletePeepHandler}
			/>
		);
	});

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

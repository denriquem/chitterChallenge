import React, { useState, useEffect, useContext, Children } from "react";
import axios from "axios";
import classes from "./Peeps.module.css";
import PeepItem from "./PeepItem";
import Card from "../UI/Card";
import AuthContext from "../../store/auth-context";

const Peeps = (props) => {
	const authCtx = useContext(AuthContext);
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
					userID: peep.user.id.toString(),
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

	const likePeepHandler = async (peepID, token) => {
		let userID = authCtx.userID;
		console.log("like peep handler from peeps");
		console.log(`userIDis: ${userID}`);
		console.log(token);

		const config = {
			headers: {
				Authorization: `Token token=${token}`,
			},
		};

		const url = `https://chitter-backend-api-v2.herokuapp.com/peeps/${peepID}/likes/${userID}`;
		console.log(url);

		try {
			const response = await axios.put(url, {}, config);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const peepList = peeps.map((peep) => {
		let samePeep = false;
		if (peep.userID.toString() === authCtx.userID) {
			samePeep = true;
		}

		return (
			<PeepItem
				id={peep.id}
				key={peep.id}
				body={peep.body}
				author={peep.userHandle}
				likes={peep.likes}
				userID={peep.userID}
				onDeletePeep={deletePeepHandler}
				onLikePeep={likePeepHandler}
				samePeep={samePeep}
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

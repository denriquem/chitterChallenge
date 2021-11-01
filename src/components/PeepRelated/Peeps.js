import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import classes from "./Peeps.module.css";
import PeepItem from "./PeepItem";
import Card from "../UI/Card";
import AuthContext from "../../store/auth-context";
import fetchPeeps from "../../apiCalls/fetchPeeps";
import deletePeep from "../../apiCalls/deletePeep";

const Peeps = (props) => {
	const authCtx = useContext(AuthContext);
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		fetchPeeps(setPeeps);
	}, []);

	const deletePeepHandler = async (peepId, token) => {
		deletePeep(peepId, token, setPeeps);
	};

	const likePeepHandler = async (peepID, token) => {
		let userID = authCtx.userID;

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
			fetchPeeps();
		} catch (err) {
			console.log(err);
		}
	};

	const peepList = peeps.map((peep) => {
		let samePeepAsPoster = false;
		let likedBySameUser = false;

		if (peep.userID.toString() === authCtx.userID) {
			samePeepAsPoster = true;
		}

		let container = [];
		peep.likesAllInfo.forEach((like) => {
			if (like.user.id.toString() === authCtx.userID) {
				container.push(1);
			}
		});

		if (container.length >= 1) {
			likedBySameUser = true;
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
				samePeep={samePeepAsPoster}
				likedBySameUser={likedBySameUser}
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

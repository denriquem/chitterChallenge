import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Peeps.module.css";
import Card from "./Card";

const Peeps = () => {
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		const fetchPeeps = async () => {
			try {
				const response = await axios.get(
					"https://chitter-backend-api-v2.herokuapp.com/peeps"
				);
				console.log("hello there");
				let loadedPeeps = response.data;
				setPeeps(loadedPeeps);

				console.log(peeps);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPeeps();
	}, []);

	return (
		<section className={classes.peeps}>
			<Card>
				<div>Here Goeth The Peeps</div>
			</Card>
		</section>
	);
};

export default Peeps;

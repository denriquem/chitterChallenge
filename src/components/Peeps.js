import React, { useState, useEffect } from "react";
import axios from "axios";

const Peeps = () => {
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		const fetchPeeps = async () => {
			try {
				const response = await axios.get(
					"https://chitter-backend-api-v2.herokuapp.com/peeps"
				);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPeeps();
	});

	return <div>These will be the Peeps</div>;
};

export default Peeps;

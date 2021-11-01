import axios from "axios";
import fetchPeeps from "./fetchPeeps";

const deletePeep = async (peepId, token, setPeeps) => {
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
		fetchPeeps(setPeeps);
	} catch (err) {
		console.log(err);
	}
};

export default deletePeep;

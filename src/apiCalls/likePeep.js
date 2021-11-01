import axios from "axios";
import fetchPeeps from "./fetchPeeps";

const likePeep = async (peepID, token, setPeeps, userID) => {
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
		fetchPeeps(setPeeps);
	} catch (err) {
		console.log(err);
	}
};

export default likePeep;

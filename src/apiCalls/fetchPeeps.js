import axios from "axios";

const fetchPeeps = async (setPeeps) => {
	try {
		const response = await axios.get(
			"https://chitter-backend-api-v2.herokuapp.com/peeps"
		);
		let loadedPeeps = response.data;

		let flattened = loadedPeeps.map((peep) => {
			return {
				id: peep.id,
				body: peep.body,
				likes: peep.likes.length,
				likesAllInfo: peep.likes,
				userHandle: peep.user.handle,
				userID: peep.user.id.toString(),
			};
		});
		setPeeps(flattened);
	} catch (error) {
		console.log(error);
	}
};

export default fetchPeeps;

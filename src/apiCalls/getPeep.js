import axios from "axios";

const getPeep = async (postID, setPeep) => {
	try {
		let response = await axios.get(
			`https://chitter-backend-api-v2.herokuapp.com/peeps/${postID}`
		);

		let newPeepObj = {
			body: response.data.body,
			handle: response.data.user.handle,
			likes: response.data.likes.length,
		};

		setPeep(newPeepObj);
	} catch (err) {
		console.log(err);
	}
};

export default getPeep;

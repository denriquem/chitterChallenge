import axios from "axios";

const addPeep = async (formData, contextData) => {
	try {
		let postRequestData = {
			peep: {
				user_id: contextData.userID,
				body: formData.peep,
			},
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token token=${contextData.token}`,
			},
		};
		const response = await axios.post(
			"https://chitter-backend-api-v2.herokuapp.com/peeps",
			postRequestData,
			config
		);
		console.log(response);
	} catch (err) {
		console.log(err);
	}
};

export default addPeep;

import React from "react";
import Modal from "../UI/Modal";
import AddPeepForm from "./AddPeepForm";
import classes from "./AddPeepForm.module.css";
import axios from "axios";

const AddPeep = (props) => {
	const submitPeepHandler = async (formData, contextData) => {
		try {
			console.log(formData);
			console.log(contextData);
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

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			<AddPeepForm
				onCancel={props.onClose}
				onConfirm={submitPeepHandler}
			></AddPeepForm>
			{modalActions}
		</Modal>
	);
};

export default AddPeep;

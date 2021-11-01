import React from "react";
import Modal from "../UI/Modal";
import AddPeepForm from "./AddPeepForm";
import classes from "./AddPeepForm.module.css";
import addPeep from "../../apiCalls/addPeep";

const AddPeep = (props) => {
	const submitPeepHandler = (formData, contextData) => {
		addPeep(formData, contextData);
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

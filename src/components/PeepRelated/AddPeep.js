import React, { useState, useContext } from "react";
import Modal from "../UI/Modal";
import AddPeepForm from "./AddPeepForm";
import classes from "./AddPeepForm.module.css";
import axios from "axios";

const submitPeepHandler = () => {};

const AddPeep = (props) => {
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

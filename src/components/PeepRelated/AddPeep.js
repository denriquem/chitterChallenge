import React, { useState } from "react";
import AddPeepForm from "./AddPeepForm";
import classes from "./AddPeepForm.module.css";

const AddPeep = (props) => {
	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
		</div>
	);
};

export default AddPeep;

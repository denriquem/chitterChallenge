import React, { useState } from "react";
import classes from "./AddPeepForm.module.css";

const AddPeepForm = () => {
	const [enteredPeep, setEnteredPeep] = useState("");

	const peepChangeHandler = (event) => {
		setEnteredPeep(event.target.value);
	};

	const submitHandler = () => {
		const formData = {
			peep: enteredPeep,
		};
		console.log(formData);
	};

	return (
		<form>
			<div className={classes.control}>
				<label htmlFor="pepp">The Peep</label>
				<input type="text" id="peep" onChange={peepChangeHandler}></input>
				<button
					className={classes.button1}
					type="submit"
					value="submit"
					onClick={submitHandler}
				></button>
			</div>
		</form>
	);
};

export default AddPeepForm;

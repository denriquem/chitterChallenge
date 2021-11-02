import React, { useState, useContext } from "react";
import classes from "./AddPeepForm.module.css";
import AuthContext from "../../store/auth-context";

const AddPeepForm = (props) => {
	const [enteredPeep, setEnteredPeep] = useState("");

	const authCtx = useContext(AuthContext);

	const peepChangeHandler = (event) => {
		setEnteredPeep(event.target.value);
	};

	const submitHandler = () => {
		const formData = {
			peep: enteredPeep,
		};
		props.onConfirm(formData, authCtx);
	};

	return (
		<form>
			<div className={classes.control}>
				<label htmlFor="pepp">The Peep</label>
				<input type="textarea" id="peep" onChange={peepChangeHandler}></input>
				<button
					className={classes.button1}
					type="submit"
					value="submit"
					onClick={submitHandler}
				>
					Add Peep
				</button>
			</div>
		</form>
	);
};

export default AddPeepForm;

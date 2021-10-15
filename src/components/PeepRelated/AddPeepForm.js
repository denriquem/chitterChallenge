import React, { useState } from "react";

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
			<div>
				<label htmlFor="pepp">The Peep</label>
				<input type="text" id="peep" onChange={peepChangeHandler}></input>
				<button type="submit" value="submit" onClick={submitHandler}></button>
			</div>
		</form>
	);
};

export default AddPeepForm;

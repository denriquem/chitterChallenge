import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
	const history = useHistory();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	const authCtx = useContext(AuthContext);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		setIsLoading(true);
		let url;
		let data;

		if (isLogin) {
		} else {
			url = "https://chitter-backend-api-v2.herokuapp.com/users";
			data = {
				users: {
					handle: enteredEmail,
					password: enteredPassword,
				},
			};

			const loginRequest = async () => {
				try {
					const response = await axios.post(url, data);
					console.log(response);
				} catch (err) {
					console.log(err);
				}
			};

			loginRequest();
		}
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? "Login" : "Create Account"}</button>
					)}
					{isLoading && <p>Loading...</p>}
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;

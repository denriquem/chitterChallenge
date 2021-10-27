import { useState, useRef, useContext } from "react";
import { Redirect } from "react-router-dom";
import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(false);
	const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

	const authCtx = useContext(AuthContext);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		let url;
		let data;

		if (isLogin) {
			console.log(enteredEmail);
			url = "https://chitter-backend-api-v2.herokuapp.com/sessions";
			data = {
				session: {
					handle: enteredEmail,
					password: enteredPassword,
				},
			};

			const loginRequest = async () => {
				try {
					const response = await axios.post(url, data);
					console.log(response.data);
					authCtx.login(response.data.session_key, response.data.user_id);
					setUserIsLoggedIn(true);
					console.log(authCtx.isLoggedIn);
				} catch (err) {
					console.log(err);
				}
			};

			loginRequest();
		} else {
			console.log(enteredEmail);
			url = "https://chitter-backend-api-v2.herokuapp.com/users";
			data = {
				user: {
					handle: enteredEmail,
					password: enteredPassword,
				},
			};

			const signUpRequest = async () => {
				try {
					const response = await axios.post(url, data);
					console.log(response.data);
				} catch (err) {
					console.log(err);
				}
			};

			signUpRequest();
			switchAuthModeHandler();
		}
	};

	if (userIsLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Handle</label>
					<input type="email" id="email" required ref={emailInputRef}></input>
				</div>
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
					<button>{isLogin ? "Login" : "Create Account"}</button>
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

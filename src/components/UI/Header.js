import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

const Header = () => {
	const authCtx = useContext(AuthContext);

	const [redirect, setRedirect] = useState(false);

	const clickHandler = () => {
		console.log("logout click handle");
		authCtx.logout();
		setRedirect(true);
		console.log(redirect);
	};

	if (redirect) {
		return <Redirect to="/auth" />;
	}

	return (
		<header className={classes.header}>
			<h1>Chitter</h1>
			<button onClick={clickHandler}>Logout</button>
		</header>
	);
};

export default Header;

import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

const Header = () => {
	const authCtx = useContext(AuthContext);

	const [redirect, setRedirect] = useState(false);

	const clickHandler = () => {
		authCtx.logout();
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to="/auth" />;
	}

	return (
		<header className={classes.header}>
			<h1>Chitter</h1>
			<button onClick={clickHandler} className={classes.signOutBtn}>
				<i className="fas fa-sign-out-alt"></i>
			</button>
		</header>
	);
};

export default Header;

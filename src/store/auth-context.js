import React, { useState } from "react";

const AuthContext = React.createContext({
	token: "",
	peepID: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
	storePeepID: (peepID) => {},
});

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem("token");
	const initialPeepID = localStorage.getItem("peepID");

	const [token, setToken] = useState(initialToken);
	const [peepID, setPeepID] = useState(initialPeepID);
	const [loggedIn, setLoggedIn] = useState(false);

	const userIsLoggedIn = !!token;

	const logOutHandler = () => {
		setToken(null);
		localStorage.removeItem(token);
	};

	const logInHandler = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
		setLoggedIn(true);
	};

	const peepIdHanlder = (peepID) => {
		console.log("hello from the peep handler, on second thoughts...");
		console.log(peepID);
		localStorage.setItem("peepID", peepID);

		setPeepID(peepID);
	};

	const contextValue = {
		token: token,
		peepID: peepID,
		isLoggedIn: userIsLoggedIn,
		login: logInHandler,
		logout: logOutHandler,
		storePeepID: peepIdHanlder,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

import React, { useState, useCallback } from "react";

const AuthContext = React.createContext({
	token: "",
	peepID: "",
	isLoggedIn: false,
	userID: "",
	login: (token) => {},
	logout: () => {},
	storePeepID: (peepID) => {},
});

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem("token");
	const initialPeepID = localStorage.getItem("peepID");
	const initialUserID = localStorage.getItem("userID");

	const [token, setToken] = useState(initialToken);
	const [peepID, setPeepID] = useState(initialPeepID);
	const [userID, setUserID] = useState(initialUserID);

	const [loggedIn, setLoggedIn] = useState(false);

	const userIsLoggedIn = !!token;

	const logOutHandler = useCallback(() => {
		setToken(null);
		setUserID(null);

		localStorage.removeItem("token");
		localStorage.removeItem("userID");
	}, []);

	const logInHandler = (token, userID) => {
		setToken(token);
		setUserID(userID);
		localStorage.setItem("token", token);
		localStorage.setItem("userID", userID);
		setLoggedIn(true);
	};

	const peepIdHandler = (peepID) => {
		localStorage.setItem("peepID", peepID);

		setPeepID(peepID);
	};

	const contextValue = {
		token: token,
		peepID: peepID,
		userID: userID,
		isLoggedIn: userIsLoggedIn,
		login: logInHandler,
		logout: logOutHandler,
		storePeepID: peepIdHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

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

	const userIsLoggedIn = !!token;

	const logOutHandler = () => {
		setToken(null);
		localStorage.removeItem(token);
	};

	const logInHandler = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
	};

	const peepIdHanlder = (peepID) => {
		setPeepID(peepID);
		localStorage.setItem("peepID", peepID);
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

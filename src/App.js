import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import Header from "./components/UI/Header";
import ChitterSummary from "./components/PeepRelated/ChitterSummary";
import Peeps from "./components/PeepRelated/Peeps";
import Peep from "./components/PeepRelated/Peep";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
	const authCtx = useContext(AuthContext);

	console.log(authCtx.isLoggedIn);

	return (
		<AuthContextProvider>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Fragment>
							<Header />
							<ChitterSummary />
							<Peeps />
						</Fragment>
					</Route>

					<Route path="/auth">
						<AuthForm />
					</Route>
					<Route exact path="/peep/:id">
						<Peep />
					</Route>
				</Switch>
			</Router>
		</AuthContextProvider>
	);
}

export default App;

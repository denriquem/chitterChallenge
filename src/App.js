import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Peep from "./components/PeepRelated/Peep";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext, { AuthContextProvider } from "./store/auth-context";
import MainPage from "./pages/MainPage";

function App() {
	const authCtx = useContext(AuthContext);

	console.log(authCtx.isLoggedIn);
	console.log(authCtx.token);
	console.log(authCtx.userID);

	return (
		<AuthContextProvider>
			<Router>
				<Switch>
					<Route path="/" exact>
						<MainPage />
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

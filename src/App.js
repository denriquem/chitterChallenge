import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useContext } from "react";
import Peep from "./components/PeepRelated/Peep";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";
import MainPage from "./pages/MainPage";

function App() {
	const authCtx = useContext(AuthContext);

	console.log(authCtx.isLoggedIn);
	console.log(authCtx.token);
	console.log(authCtx.userID);

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{authCtx.isLoggedIn && <MainPage />}
					{!authCtx.isLoggedIn && <Redirect to="/auth" />}
				</Route>
				<Route path="/auth">
					<AuthForm />
				</Route>
				<Route exact path="/peep/:id">
					{authCtx.isLoggedIn && <Peep />}
					{!authCtx.isLoggedIn && <Redirect to="/auth" />}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

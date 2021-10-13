import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/UI/Header";
import ChitterSummary from "./components/PeepRelated/ChitterSummary";
import Peeps from "./components/PeepRelated/Peeps";
import AuthForm from "./components/Auth/AuthForm";

function App() {
	return (
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
			</Switch>
		</Router>
	);
}

export default App;

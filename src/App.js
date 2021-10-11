import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import ChitterSummary from "./components/ChitterSummary";
import Peeps from "./components/Peeps";

function App() {
	return (
		<Fragment>
			<Header />
			<ChitterSummary />
			<Peeps />
		</Fragment>
	);
}

export default App;

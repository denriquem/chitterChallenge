import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import ChitterSummary from "./components/ChitterSummary";

function App() {
	return (
		<Fragment>
			<Header />
			<ChitterSummary />
		</Fragment>
	);
}

export default App;

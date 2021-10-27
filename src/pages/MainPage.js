import { useState, Fragment } from "react";
import Header from "../components/UI/Header";
import AddPeep from "../components/PeepRelated/AddPeep";
import ChitterSummary from "../components/UI/ChitterSummary";
import Peeps from "../components/PeepRelated/Peeps";

const MainPage = () => {
	const [addPeepIsShown, setAddPeepIsShown] = useState(false);

	const showAddPeepHandler = () => {
		setAddPeepIsShown(true);
	};

	const hideAddPeepHandler = () => {
		setAddPeepIsShown(false);
	};

	return (
		<Fragment>
			<Header />
			{addPeepIsShown && <AddPeep onClose={hideAddPeepHandler} />}
			<ChitterSummary />
			<Peeps onShowAddPeep={showAddPeepHandler} />
		</Fragment>
	);
};

export default MainPage;

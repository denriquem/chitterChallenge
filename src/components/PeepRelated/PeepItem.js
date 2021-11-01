import React, { useContext, useState } from "react";
import classes from "./PeepItem.module.css";
import AuthContext from "../../store/auth-context";
import { Redirect } from "react-router-dom";

const PeepItem = (props) => {
	const authCtx = useContext(AuthContext);
	const samePeep = props.samePeep;
	const likedBySameUser = props.likedBySameUser;

	const [redirect, setRedirect] = useState(false);

	const clickPeepHandler = (peepID, e) => {
		e.preventDefault();
		authCtx.storePeepID(peepID);
		setRedirect(true);
	};

	const deletePeepHandler = () => {
		props.onDeletePeep(props.id, authCtx.token);
	};

	const likeButtonHandler = (peepID, e) => {
		e.preventDefault();

		console.log("Hello hello from like button");
		props.onLikePeep(peepID, authCtx.token);
	};

	if (redirect) {
		return <Redirect to={`peep/${props.id}`} />;
	}

	return (
		<li className={classes.peep}>
			<div>
				<h3>{props.body}</h3>
				<h4>{props.author}</h4>
				<h4>Likes: {props.likes}</h4>
				<button
					className={classes.viewButton}
					onClick={(e) => clickPeepHandler(props.id, e)}
				>
					<i className="fas fa-eye"></i>
				</button>
				{!likedBySameUser && (
					<button
						onClick={(e) => likeButtonHandler(props.id, e)}
						className={classes.likeBtn}
					>
						<i className="far fa-heart"></i>
					</button>
				)}

				{samePeep && (
					<button className={classes.deleteBtn} onClick={deletePeepHandler}>
						<i className="far fa-trash-alt"></i>
					</button>
				)}
			</div>
		</li>
	);
};

export default PeepItem;

import React from "react";
import "./Nav.css";

const Nav = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav>
				<p onClick={() => onRouteChange("signout")} className="navLink">
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav>
				<p onClick={() => onRouteChange("signin")} className="navLink">
					Sign-in
				</p>
				<p onClick={() => onRouteChange("register")} className="navLink">
					Register
				</p>
			</nav>
		);
	}
};

export default Nav;

import React, { Component } from "react";
import Nav from "./Components/Navigation/Nav";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Test from "./Components/Test/Test";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			box: {},
			route: "signin",
			isSignedIn: false
		};
	}

	componentDidMount() {
		fetch("http://localhost:5000")
			.then(res => res.json())
			.then(console.log);
	}
	onInputChange = event => {
		this.setState({ input: event.target.value });
	};

	onRouteChange = route => {
		if (route === "signout") {
			this.setState({ isSignedIn: false });
		} else if (route === "home") {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	render() {
		const { isSignedIn, route } = this.state;
		return (
			<div className="App">
				<Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{route === "home" ? (
					<div>
						<Test />
					</div>
				) : route === "signin" ? (
					<Signin onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}
export default App;

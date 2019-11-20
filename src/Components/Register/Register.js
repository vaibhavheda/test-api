import React from "react";
import "./reg.css";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			pass: ""
		};
	}

	onEmailchange = even => {
		this.setState({ email: even.target.value });
	};
	onNamechange = even => {
		this.setState({ name: even.target.value });
	};
	onPasschange = e => {
		this.setState({ pass: e.target.value });
	};

	onRegister = () => {
		if (
			this.state.name === "" ||
			this.state.email === "" ||
			this.state.pass === ""
		) {
			alert("Please Check You data");
		} else {
			fetch("http://localhost:5000/register", {
				method: "POST",
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					pass: this.state.pass
				}),
				headers: { "Content-Type": "application/json" }
			})
				.then(res => res.json())
				.then(user => {
					console.log(user);
					if (user === "success") {
						this.props.onRouteChange("home");
						alert("Click Start Test Button To Start Your Test");
					} else alert("Check your Email Id and Password!");
				});
		}
	};

	render() {
		return (
			<article>
				<fieldset id="sign_up">
					<legend>Create Account</legend>
					<div className="container">
						<table>
							<tbody>
								<tr>
									<td>
										<label htmlFor="name">Name</label>
									</td>
									<td>
										<input
											onChange={this.onNamechange}
											className="field"
											type="text"
											name="name"
											id="name"
										/>
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor="email-address">Email</label>
									</td>
									<td>
										<input
											onChange={this.onEmailchange}
											className="field"
											type="email"
											name="email-address"
											id="email-address"
										/>
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor="password">Password</label>
									</td>
									<td>
										<input
											onChange={this.onPasschange}
											className="field"
											type="password"
											name="password"
											id="password"
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<br />
					</div>

					<input
						className="button"
						onClick={this.onRegister}
						type="submit"
						value="Create Your Account"
					/>
				</fieldset>
			</article>
		);
	}
}
export default Register;

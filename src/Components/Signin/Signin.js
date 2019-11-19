import React from "react";
import "../Register/reg.css";

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			pass: ""
		};
	}

	onEmailchange = even => {
		this.setState({ email: even.target.value });
	};
	onPasschange = e => {
		this.setState({ pass: e.target.value });
	};

	onSingnin = () => {
		console.log(this.state);
		fetch("http://localhost:5000/signin", {
			method: "POST",
			body: JSON.stringify({
				email: this.state.email,
				pass: this.state.pass
			}),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(user => {
				if (user.id) {
					this.props.onRouteChange("home");
					alert("Click Start Test Button To Start Your Test");
				} else alert("Check your Email Id and Password!");
			});
	};
	render() {
		const { onRouteChange } = this.props;
		return (
			<article>
				<main>
					<fieldset id="sign_in">
						<legend>Sign in</legend>
						<div className="container">
							<table>
								<tbody>
									<tr>
										<td>
											<label htmlFor="email-address">Email</label>
										</td>
										<td>
											<input
												autoComplete="off"
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
												autoComplete="off"
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
						</div>

						<input
							className="button"
							onClick={this.onSingnin}
							type="submit"
							value="Sign-in"
						/>

						<p className="create" onClick={() => onRouteChange("register")}>
							Create Account
						</p>
					</fieldset>
				</main>
			</article>
		);
	}
}

export default Signin;

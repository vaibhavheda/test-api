/* eslint-disable no-undef */
import React, { Component } from "react";
import questions from "./Testque";
import "./Text.css";

var correct = 0;
var totalque = 10;
var wrong = 0;

const getNext = () => {
	const test = document.getElementById("beginTest");
	test.innerHTML = "";
	const main_paper = document.createElement("h1");
	main_paper.innerHTML = questions[counter].que;
	main_paper.setAttribute("class", "question");
	test.appendChild(main_paper);

	for (var i = 0; i < 4; i++) {
		const a = document.createElement("input");
		a.setAttribute("type", "radio");
		a.setAttribute("name", questions[counter].id);
		a.setAttribute("value", i);
		test.appendChild(a);

		const p1 = document.createElement("label");
		p1.innerHTML = questions[counter].options[i] + "<br>";
		test.appendChild(p1);
	}

	var btn = document.createElement("BUTTON");
	btn.setAttribute("class", "btn");
	btn.innerHTML = "Next";
	btn.addEventListener("click", () => {
		onNextClicked();
	});
	test.appendChild(btn);
};

const max = questions.length;
const onNextClicked = () => {
	const opt = document.getElementsByTagName("input");
	var corr = questions[opt[0].name - 1].Corr;
	var out = 5;
	var res;
	for (var i = 0; i < 4; i++) {
		if (opt[i].checked) {
			out = i;
		}
	}
	//validating atleast one checked
	if (out === 5) {
		alert("Please Select atleast one Answer.");
	} else {
		console.log(out);
		if (out === 0) {
			res = "A";
		} else if (out === 1) {
			res = "B";
		} else if (out === 2) {
			res = "C";
		} else if (out === 3) {
			res = "D";
		}

		if (corr === res) {
			correct += 1;
		} else {
			wrong += 1;
		}
		console.log(correct + " " + wrong);
		if (counter < max - 1) counter += 1;
		else {
			counter = 0;
		}
		totalque -= 1;
		if (totalque > 0) getNext();
		else {
			const test = document.getElementById("beginTest");
			test.innerHTML =
				"<B>Thank You <B> For Giving the test <br/>You Scored " +
				correct +
				"Out of 10.";
		}
	}
};
// const questions = [
// 	{
// 		id: 1,
// 		que: "What is Full Form Of Html",
// 		options: [
// 			"HyperText Markup Language",
// 			"HyperBeast Language Protocol",
// 			"Text transfer Protocol",
// 			"HyperText Transfer Protocol"
// 		],
// 		Corr: "A"
// 	},
// 	{
// 		id: 2,
// 		que: "What is Full Form Of CSS",
// 		options: [
// 			"Cascading StyleSheets",
// 			"Sheets ",
// 			"Google Sheets",
// 			"Styling Sheets"
// 		],
// 		Corr: "A"
// 	}
// ];
var counter = Math.floor(Math.random() * 10);
class Test extends Component {
	constructor() {
		super();
		this.state = {};
	}

	onStartClicked() {
		const test = document.getElementById("beginTest");
		const start = document.getElementsByClassName("startbtn");

		start[0].style.display = "none";
		const main_paper = document.createElement("h1");
		main_paper.innerHTML = questions[counter].que;
		main_paper.setAttribute("class", "question");
		test.appendChild(main_paper);

		for (var i = 0; i < 4; i++) {
			const a = document.createElement("input");
			a.setAttribute("type", "radio");
			a.setAttribute("name", questions[counter].id);
			a.setAttribute("value", i);
			test.appendChild(a);

			const p1 = document.createElement("label");
			p1.innerHTML = questions[counter].options[i] + "<br>";
			test.appendChild(p1);
		}

		var btn = document.createElement("BUTTON");
		btn.setAttribute("class", "btn");
		btn.innerHTML = "Next";
		btn.addEventListener("click", () => {
			onNextClicked();
		});
		test.appendChild(btn);
	}

	render() {
		return (
			<div id="beginTest">
				<button className="startbtn" onClick={this.onStartClicked}>
					Start Test
				</button>
			</div>
		);
	}
}

export default Test;

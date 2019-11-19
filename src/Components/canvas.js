import React, { Component } from "react";
import { Canvas } from "react-canvas-js";

const sample1 = {
	maxParticles: 75,
	colors: ["#2E1D62", "#513D91", "#487EEF", "#11A887", "#fc5c65", "#fed330"],
	shapes: ["circle", "square", "Rectangle"],
	size: 15,
	minSpeed: 0.2,
	maxSpeed: 0.8,
	alpha: 0.7,
	backgroundColor: "#202020"
};

export default class Can extends Component {
	render() {
		return <Canvas options={sample1} />;
	}
}

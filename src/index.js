import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

let faders = document.querySelectorAll(".fader");
let scrollOptions = {
	threshold: 0.3,
	rootMargin: "-75px 0px 0px 0px",
};
let scrollObserver = new IntersectionObserver((faders, scrollObserver) => {
	faders.forEach((fader) => {
		let element = fader.target;
		// console.log(fader.target);
		if (fader.isIntersecting) {
			element.classList.remove("fade-out");
			element.classList.add("fade-in");
		} else {
			element.classList.add("fade-out");
			element.classList.remove("fade-in");
		}
	});
}, scrollOptions);

faders.forEach((fader) => {
	scrollObserver.observe(fader);
});

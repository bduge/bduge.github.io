import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div id="header" className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row d-flex justify-content-center fader">
						<div className="col-md-4 col-7">
							<img
								className="img-fluid headshot mb-3 pb-1"
								src={process.env.PUBLIC_URL + "/images/headshot.jpg"}
								alt="Headshot"
							></img>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<h1>Bill DuGe</h1>
					</div>
					<div className="row d-flex justify-content-center my-2">
						<a
							href="https://github.com/bduge/"
							className="mx-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github highlight"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/bill-duge/"
							className="mx-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin highlight"></i>
						</a>
						<a
							href="mailto:billduge11@gmail.com"
							className="mx-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fas fa-envelope highlight"></i>{" "}
						</a>
					</div>
					<div className="row d-flex justify-content-center fader">
						<div className="col-10 col-md-8">
							<p>
								Nice to meet you and thanks for visiting my website! My name is
								Bill and I'm a software developer. I am currently a co-op
								computer science student at the University of Waterloo in
								Canada, but I lived in Edmonton, Canada for most of my life.
							</p>
							<p>
								I am currently seeking a 4 month internship for Winter 2021.
								Scroll down to check out my past work experience or some
								projects below. If you are interested in working with me or just
								want to chat, feel free to send me an email at
								billduge@gmail.com or a message on LinkedIn. Both are linked
								above for your convienience.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

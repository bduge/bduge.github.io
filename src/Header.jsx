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
								Hi there, thanks for visiting my website! My name is Bill and
								I'm a <strong>software engineer</strong>. I'm currently in my
								3rd year of studying <strong>Computer Science</strong> in the
								Co-op program at the <strong>University of Waterloo</strong>.
							</p>
							<p>
								I'm seeking a <strong>4 month internship </strong>
								for Fall 2021 starting in <strong>September 2021</strong>.
								Scroll down to check out my previous work experiences and
								projects! If you're interested in working with me or just want
								to chat, feel free to send me an email at
								<strong> billduge11@gmail.com</strong> or a message on LinkedIn.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

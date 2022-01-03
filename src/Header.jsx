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
								src={process.env.PUBLIC_URL + "/images/headshot.png"}
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
								Hey there, thanks for visiting my website! My name is Bill and
								I'm a <strong>student</strong> and <strong>software engineer</strong>. I'm currently in my
								4th year of studying <strong>Computer Science</strong> in the
								co-op program at the <strong>University of Waterloo</strong>.
							</p>
							<p>
								I'm currently seeking a <strong>4 month</strong> internship
								for Fall 2022 starting in <strong>September 2022</strong>.
								Scroll down to check out my previous work experiences and
								projects! If you're interested in connecting with me, feel free
								to send me an email at
								<a
									style={{fontSize: "1em", color: "inherit"}}
									href="mailto:billduge11@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong> billduge11@gmail.com </strong> 
								</a>
								or a message on 
								<a
									style={{fontSize: "1em", color: "inherit"}}
									href="https://www.linkedin.com/in/bill-duge/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong> LinkedIn</strong>
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

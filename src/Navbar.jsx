import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md fixed-top py-0">
				<div className="container-fluid">
					<a className="navbar-brand" href="#header">
						<img
							id="logo"
							className="img-fluid"
							src="/images/logo.png"
							alt="logo"
						/>
					</a>
					<button
						className="navbar-toggler nav-button py-2"
						type="button"
						data-toggle="collapse"
						data-target="#navbarContent"
						aria-controls="navbarContent"
						aria-expanded="false"
						aria-label="Toggle Navigation"
					>
						<i class="fas fa-bars"></i>
					</button>
				</div>
				<div id="navbarContent" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link shortcut highlight" href="#experience">
								Experience
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link shortcut highlight" href="#skills">
								Skills
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link shortcut highlight" href="#projects">
								Projects
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link shortcut highlight" href="#about">
								About
							</a>
						</li>

						<li className="nav-item">
							<a
								className="nav-link shortcut highlight"
								href="resume/billduge-resume.pdf"
								target="_blank"
								rel="noreferrer noopener"
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;

import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
	render() {
		return (
			<div className="row d-flex justify-content-center justify-content-md-between my-5">
				<div className="col-12 col-md-7">
					<a
						href={this.props.github}
						target="_blank"
						rel="noreferrer noopener"
						className="github-link"
					>
						<h3 className="">{this.props.name}</h3>
					</a>
					<h6 className="float-lg-right italicise">
						{this.props.technologies}
					</h6>
					<h6>{this.props.app_type}</h6>
					<p>{this.props.description}</p>
				</div>
				<div className="col-12 col-md-5 d-flex align-items-center">
					<a href={this.props.github} target="_blank" rel="noreferrer noopener">
						<img
							className="img-fluid picture my-2"
							src={this.props.picture}
							alt={this.props.name}
						/>
					</a>
				</div>
			</div>
		);
	}
}

export default Project;

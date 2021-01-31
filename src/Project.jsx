import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
	render() {
		return (
			<div className="row d-flex justify-content-center justify-content-md-between my-5 fader">
				<div className="col-11 col-md-7">
					<div className="row d-flex justify-content-between align-items-end">
						<a
							href={this.props.github}
							target="_blank"
							rel="noreferrer noopener"
							className="github-link"
						>
							<h3 className="">{this.props.name}</h3>
						</a>
						{this.props.link ? (
						<a
							href={this.props.link}
							target="_blank"
							rel="noreferrer noopener"
							className="github-link"
						>
							<h4 className="">{this.props.website}</h4>
						</a>
						) : (
							<></>
						)}
					</div>
					<div className="row d-flex justify-content-between align-items-end">
						<h6>{this.props.app_type}</h6>
						<h6 className="d-none d-md-block float-right">
							{this.props.technologies}
						</h6>
					</div>
					<div className="row">
						{this.props.description}
					</div>
				</div>
				<div className="col-12 col-md-5 px-md-2">
					<a href={this.props.github} target="_blank" rel="noreferrer noopener">
						<img
							className="img-fluid picture my-2 mx-2"
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

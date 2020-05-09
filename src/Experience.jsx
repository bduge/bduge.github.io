import React, { Component } from "react";
import "./Experience.css";

class Experience extends Component {
	render() {
		const description = this.props.description;
		const bulletPoints = description.map((bullet) => {
			return <p key={bullet}>• {bullet}</p>;
		});

		return (
			<div className="row d-flex justify-content-center justify-content-md-between my-5">
				<div className="col-12 col-md-4 px-5 mx-5 mx-md-0 px-md-0">
					<img
						className="img-fluid mb-4 mb-md-0"
						src={this.props.logo}
						alt={this.props.company}
					/>
				</div>
				<div className="col-12 col-md-7">
					<div className="row d-flex justify-content-between align-items-end">
						<h4>{this.props.company}</h4>
						<h6 className="d-none d-md-block float-right">
							{this.props.location}
						</h6>
					</div>
					<div className="row d-flex justify-content-between align-items-end">
						<h5>{this.props.role}</h5>
						<h6 className="float-left float-md-right">{this.props.date}</h6>
					</div>
					<div className="job-description">{bulletPoints}</div>
				</div>
			</div>
		);
	}
}

export default Experience;

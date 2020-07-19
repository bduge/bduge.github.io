import React, { Component } from "react";

class Activity extends Component {
	render() {
		return (
			<div className="row d-flex justify-content-center justify-content-md-between my-5 fader">
				<div className="col-12 col-md-3 mx-md-0 px-md-0">
					<img
						className="img-fluid picture mb-4 mb-md-0"
						src={this.props.image}
						alt={this.props.title}
					/>
				</div>
				<div className="col-12 col-md-8">
					<h4>{this.props.title}</h4>
					<div>{this.props.description}</div>
				</div>
			</div>
		);
	}
}

export default Activity;

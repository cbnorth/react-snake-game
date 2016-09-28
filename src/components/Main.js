import React from 'react';

let Main = React.createClass({
	render() {
		return (
			<div className="mainContainer">
				<h1 className="snakeGame__title">React Snake Game</h1>
				<div className="mainContainer__mainContent">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;

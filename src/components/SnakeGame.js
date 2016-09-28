import React from 'react';

let keymap = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

let SnakeGame = React.createClass({
	getInitialState(){
		return {
			snake: [[1, 1],[1, 2],[1, 3],[1, 4]],
			direction: "right",
			multiplier: 20,
			numCells: 30,
			food: []
		}

	},

	componentDidMount() {
		this._snakePos();
		this._newFood();
		this._tic();
		document.body.addEventListener('keydown', this._changeDirection, false);
	},

	_changeDirection(key) {
		key.preventDefault();
		let arrow = key.keyCode;
		let direction = this.state.direction;

		if (arrow === 37) {
			direction = 'left'
		} else if (arrow === 38) {
			direction = 'up'
		} else if (arrow === 39) {
			direction = 'right'
		} else if (arrow === 40) {
			direction = 'down'
		} else {
			return false;
		}

		this.setState({
			direction: direction
		})
	},

	_tic() {
		let last = (this.state.snake.length - 1);
		let head = this.state.snake[last];
		let current = this.state.snake
		let newPos = [];
		if (this.state.direction === "right" || this.state.direction === "left") {
			for (let i in this.state.snake) {
				let x = this.state.snake[i][0];
				let y = this.state.snake[i][1];
				if (this.state.direction === "right") {
					//decided to loop instead of end game
					if (y === this.state.multiplier) {
						newPos.push([x, parseInt(1)])
					} else {
						newPos.push([x, parseInt(y + 1)])
					}
				} else if (this.state.direction === "left") {
					//loop behavior
					if (y === 0) {
						newPos.push([x, parseInt(this.state.multiplier)])
					} else {
						newPos.push([x, parseInt(y - 1)])
					}
				}

			}
		}

		//conditions for when snake head X, Y === food X, Y
		//increase length and call this._newFood();

		//condition for when snake body === snake head
		//gameOver

		this._snakePos(newPos);

		setTimeout(this._tic, 150);
	},

	_snakePos(newPos) {
		this.setState({
			snake: newPos
		})
	},

	_newFood() {
		let foodX = Math.floor(Math.random() * this.state.multiplier);
		let foodY = Math.floor(Math.random() * this.state.multiplier);
		this.setState({
			food: [foodX, foodY],
		})
	},

	render() {
		let cellArr = [];
		let food = this.state.food.toString();
		let snake = [];
		for (let i in this.state.snake) {
			let string = this.state.snake[i].toString();
			snake.push(string);
		}

		for (let i = 1; i <= this.state.multiplier; i ++ ) {
			for (let j = 1; j <= this.state.multiplier; j++) {
				let key = [i, j].toString();
				if (snake.indexOf(key) > -1) {
					cellArr.push(<div className={'snakeGame__cell--Snake'} key={key}></div>)
				} else if (key === food) {
					cellArr.push(<div className={'snakeGame__cell--Food'} key={key}></div>)
				} else {
					cellArr.push(<div className={'snakeGame__cell'} key={key} data-key={key}></div>)
				}
			}
		}

		return(
			<div className="snakeGame" ref="game">
				<div className="snakeGame__board" style={{width: this.state.multiplier * this.state.numCells, height: this.state.multiplier *  this.state.numCells}}>
					{cellArr}
				</div>
			</div>
		);

	}
});


module.exports = SnakeGame;

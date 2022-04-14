class PlayBoard {
	board = {
		height: 0,
		width: 0,
	}
	position = {
		X: 0,
		Y: 0,
	}
	direction = 'N'

	constructor(height, width, posX, posY) {
		//Check if position is inside the board
		if (posX < 0 || posX >= width) {
			posX = 0
		}
		if (posY < 0 || posY >= height) {
			posY = 0
		}

		this.board.height = height
		this.board.width = width
		this.position.X = posX
		this.position.Y = posY
		this.direction = 'N'
	}

	checkPosition() {
		// Check if position is inside board
		if (
			this.position.X >= 0 &&
			this.position.X < this.board.width &&
			this.position.Y >= 0 &&
			this.position.Y < this.board.height
		) {
			return true
		} else {
			this.setOutOfRange()
			return false
		}
	}
	setOutOfRange() {
		this.position.X = -1
		this.position.Y = -1
	}
	movePosition(step) {
		if (step == 1) {
			switch (this.direction) {
				case 'N':
					this.position.Y--
					break
				case 'S':
					this.position.Y++
					break
				case 'W':
					this.position.X--
					break
				case 'E':
					this.position.X++
					break
			}
		} else if (step == 2) {
			switch (this.direction) {
				case 'N':
					this.position.Y++
					break
				case 'S':
					this.position.Y--
					break
				case 'W':
					this.position.X++
					break
				case 'E':
					this.position.X--
					break
			}
		}
	}

	moveDirection(rotate) {
		switch (rotate) {
			case 3:
				switch (this.direction) {
					case 'N':
						this.direction = 'E'
						break
					case 'E':
						this.direction = 'S'
						break
					case 'S':
						this.direction = 'W'
						break
					case 'W':
						this.direction = 'N'
						break
				}
				break

			case 4:
				switch (this.direction) {
					case 'N':
						this.direction = 'W'
						break
					case 'W':
						this.direction = 'S'
						break
					case 'S':
						this.direction = 'E'
						break
					case 'E':
						this.direction = 'N'
						break
				}
				break
		}
	}

	printPosition() {
		return `[${this.position.X},${this.position.Y}]`
	}
}

module.exports = PlayBoard

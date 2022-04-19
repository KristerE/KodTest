const PlayBoard = require('./CodeTest')
var rl = require('readline-sync')

//kontrollera initieringen
if (typeof process.argv[2] === 'undefined') {
	console.log('[-1,-1]')
	process.exit(1)
}
const argv = process.argv[2].split(',')
const isnumber = argv.every(function (value) {
	return Number.parseInt(value)
})

if (!isnumber) {
	console.log('[-1,-1]')
	process.exit(1)
}

const board = new PlayBoard(argv[0], argv[1], argv[2], argv[3])

let run = true
let input
let stdin

while (run) {
	stdin = rl.prompt()
	if (!Number.isNaN(stdin)) {
		input = parseInt(stdin)
		switch (input) {
			case 1:
			case 2:
				board.movePosition(input)
				break
			case 3:
			case 4:
				board.moveDirection(input)
				break
		}

		if (input == 0 || board.checkPosition() == false) {
			run = false
			console.log(board.printPosition())
		}
	}
}

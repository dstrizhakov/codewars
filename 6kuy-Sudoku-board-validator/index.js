/**
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the 
grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 
sub-grids (also known as blocks) contain all of the digits from 1 to 9.
More info at: http://en.wikipedia.org/wiki/Sudoku
Sudoku Solution Validator
Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku 
solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, 
which will represent empty cells. Boards containing one or more zeroes are considered to 
be invalid solutions.

Details:
All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
User solution must not modify input boards.
 */

// Мое решение:
function validateSudoku(board) {
	return checkRows(board) && checkColumns(board) && checkSubGrids(board) && true;
}
// проверка радов
function checkRows(board) {
	for (let i = 0; i < board.length; i++) {
		let subarray = [];
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 0) { return false; }
			if (subarray.some(el => el === board[i][j])) { return false; }
			subarray.push(board[i][j]);
		}
	}
	return true;
}
// проверка колонок
function checkColumns(board) {
	for (let i = 0; i < board.length; i++) {
		let subarray = [];
		for (let j = 0; j < board[i].length; j++) {
			if (board[j][i] === 0) { return false; }
			if (subarray.some(el => el === board[j][i])) { return false; }
			subarray.push(board[j][i])
		}
	}
	return true;
}
//проверка подмассивов, сложность O(n^4)!!! 
function checkSubGrids(board) {
	for (let i = 0; i <= 6; i += 3) {
		for (let j = 0; j <= 6; j += 3) {
			let subarray = [];
			for (let m = i; m < i + 3; m++) {
				for (let n = j; n < j + 3; n++) {
					if (subarray.some(el => el === board[m][n])) { return false; }
					subarray.push(board[m][n])
				}
			}
		}
	}
	return true;
}

//Самое умное решение:
// function validateSudoku(board) {
// 	for (let i = 0; i < 9; i++) {
// 		let row = new Set(), col = new Set(), sq = new Set();
// 		for (let j = 0; j < 9; j++) {
// 			let rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
// 			let colIndex = 3 * (i % 3) + (j % 3);
// 			if (board[i][j] === 0 || row.has(board[i][j]) ||
// 				board[j][i] === 0 || col.has(board[j][i]) ||
// 				board[rowIndex][colIndex] === 0 || sq.has(board[rowIndex][colIndex])) return false;
// 			row.add(board[i][j]);
// 			col.add(board[j][i]);
// 			sq.add(board[rowIndex][colIndex]);
// 		}
// 	}
// 	return true;
// }

// еще одно интересное решение:
// function validateSudoku(board) {
// 	let set = new Set() 
// 	let zeroSet = new Set()
// 	for(let i=0; i<board.length; i++) {
// 		for(let j=0; j<board[0].length; j++) {
// 			let value = board[i][j]
// 			let row = value + ' row-' + i 
// 			let col = value + ' col-' + j
// 			let box = value + ' box-' + Math.floor(i/3) + "," + Math.floor(j/3) 
// 			if(set.has(row) || set.has(col) || set.has(box) || zeroSet.has(0)) {
// 				return false
// 			}
// 			else {
// 				set.add(row)
// 				set.add(col)
// 				set.add(box)
// 				if(value === 0)
// 					zeroSet.add(value)
// 			}
// 		}
// 	}
// return true
// }
const UNITS = ['', 'k', 'm', 'b', 't']

const aToZ = []
for (let i = 0; i < 26; i++) {
	const letter = String.fromCharCode(97 + i)
	aToZ.push(letter)
}

for (let i = 0; i < 5; i++) {
	aToZ.forEach(letter => {
		const unit = new Array(2+ i).fill(letter)
		UNITS.push(unit.join(''))
	})
}

export { UNITS }

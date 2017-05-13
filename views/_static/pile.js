var centre, pointer, pile

function init(add) {
	pointer = add
	shuffle()
	centre = pile[pointer+1]
}

function shuffle() {
	var j, x, i = 55
	while (i) {
		j = parseInt(Math.random() * i);
		x = pile[--i]
		pile[i] = pile[j]
		pile[j] = x
	}
}
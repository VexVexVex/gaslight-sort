export function yolosort<Type>(array: Array<Type>): Array<Type> {
	console.log("YOLO!");
	return randomize(array);
}

function randomize<Type>(array: Array<Type>): Array<Type> {
	let currentIndex = array.length;
	let randomIndex = 0;

	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
}

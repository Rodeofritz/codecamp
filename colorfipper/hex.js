const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.querySelector('#btn');
const display = document.querySelector('.color');

button.addEventListener('click', function () {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		const newColor = getRandomColor();
		hexColor += hex[newColor];
	}

	document.body.style.background = hexColor;
	display.textContent = hexColor;
});

const getRandomColor = function () {
	return Math.floor(Math.random() * hex.length);
};

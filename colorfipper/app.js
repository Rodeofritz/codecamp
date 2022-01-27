const colors = [
	'green',
	'red',
	'rgba(133, 122, 200)',
	'#f58904',
	'purple',
	'blue',
];

const button = document.querySelector('#btn');
const display = document.querySelector('.color');

button.addEventListener('click', function () {
	for (let i = 0; i < colors.length; i++) {
		const randomColor = getRandomColor();
		newColor = colors[randomColor];
	}

	document.body.style.backgroundColor = newColor;
	display.textContent = newColor;
});

const getRandomColor = function () {
	return Math.floor(Math.random() * colors.length);
};

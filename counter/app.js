const display = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let counter = 0;
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const type = e.currentTarget.classList;
		if (type.contains('increase')) {
			counter++;
		} else if (type.contains('decrease')) {
			counter--;
		} else if (type.contains('reset')) {
			counter = 0;
		}
		//adding color to display
		if (counter > 0) {
			display.style.color = 'green';
		}
		if (counter < 0) {
			display.style.color = 'red';
		}
		if (counter === 0) {
			display.style.color = 'black';
		}
		display.textContent = counter;
	});
});

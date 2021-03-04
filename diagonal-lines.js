const getDiagonal = () => {
  // The elements that will be transformed
	const lines = document.querySelectorAll('.line__diagonal');

	lines.forEach((line) => {
    // Parent container of the line
		const parent = line.parentElement;
    // Calculate trigonometry of parent
		const hypotenuse = Math.hypot(parent.offsetWidth, parent.offsetHeight);
		const opposite = parent.offsetHeight;
		const adjacent = parent.offsetWidth;
    // Calculate the angle required
		let angle = Math.asin(opposite / hypotenuse) * 180 / Math.PI;

		// Look for helper class -reversed and reverse it
		if (!line.classList.contains('-reversed')) angle = angle * -1;

    // Skew the element to give it the correct angle and maintain dimensions of the parent
		line.style.transform = `skewY(${angle}deg)`;
	});
};

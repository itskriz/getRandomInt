function getRandomInt(min, max, exclude) {
  min = min || 0;
  max = max || 1;
	exclude = exclude || false;
  let number = Math.floor(Math.random() * Math.floor(max + 1 - min) + Math.floor(min));
  if (typeof exclude !== "object") {
  	exclude = [exclude];
  }
  if (exclude[0] !== false) {
    while (exclude.includes(number)) {
      number = Math.floor(Math.random() * Math.floor(max + 1 - min) + Math.floor(min));
    }
  }
  return number;
}

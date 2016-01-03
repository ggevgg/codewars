function wallpaper(l, w, h) {
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  return numbers[Math.ceil(2*h*(l+w)/0.52/10 * 1.15)];
}

console.log(wallpaper(5,4,3));
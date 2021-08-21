// All the vars needed
var targetBody = document.querySelector('body');
var targetH3 = document.querySelector('h3');
var targetColor1 = document.getElementById('color-1');
var targetColor2 = document.getElementById('color-2');
var targetRButton = document.getElementById('randomize');

// Function to change css background property of body
// with values from inputs
function changeBackground() {
  targetBody.style.background =
    'linear-gradient(to right, ' + targetColor1.value + ', ' + targetColor2.value + ')';
  outputH3();
}

// Event listeners for color input change events
targetColor1.addEventListener('input', changeBackground);
targetColor2.addEventListener('input', changeBackground);

// Function to output background value to h3
function outputH3() {
  targetH3.innerHTML =
    'background: linear-gradient(to right, ' +
    targetColor1.value +
    ', ' +
    targetColor2.value +
    ');';
  // Or:
  // targetH3.textContent = 'backround: ' targetBody.style.background + ';';
}

// Doing additional stuff from exercise

// Making a random hex number for color inputs
// have to add # at the beginning to make hex code
function genHex(length) {
  var result = '';
  var characters = 'abcdef0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// This will make random values for the color inputs
function randomColorInputs() {
  targetColor1.value = '#' + genHex(6);
  targetColor2.value = '#' + genHex(6);
}

// This outpus random input values and sets them as bacground
// on page load
document.addEventListener('load', randomColorInputs());
document.addEventListener('load', changeBackground());

// This outputs css line for displayed background after page is loaded
targetH3.addEventListener('load', outputH3());

// Random button and it's functionality
targetRButton.addEventListener('click', function () {
  randomColorInputs();
  changeBackground();
});

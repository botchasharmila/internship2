function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLastChar() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function appendCharacter(char) {
  document.getElementById('result').value += char;
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var calculatedResult = eval(result);
  document.getElementById('result').value = calculatedResult;
}
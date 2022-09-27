// Assignment code here

/*Links html checkbox and number data to Javascript*/
var PasswordEl = document.getElementById('password')
var LengthEl = document.getElementById('Length')
var UpperCaseEl = document.getElementById('UpperCase')
var LowerCaseEl = document.getElementById('LowerCase')
var NumberEl = document.getElementById('Numeric')
var SymbolEl = document.getElementById('Special')
var GenerateEl = document.getElementById('generate')


//Retrieves random symbol generation so that later code in for loop is simplified.
const randomfunc = {
  lower: GetRandomLower,
  upper: GetRandomUpper,
  number: GetRandomNumber,
  symbol: GetRandomSymbol,
}

//Checks values for criteria to see if they were selected.
function writePassword() {
  var length = +LengthEl.value;
  var hasLower =  LowerCaseEl.checked;
  var hasUpper =  UpperCaseEl.checked;
  var hasNumber =  NumberEl.checked;
  var hasSymbol =  SymbolEl.checked;

  PasswordEl.innerText = generatePassword(
  hasLower,
  hasUpper,
  hasNumber,
  hasSymbol,
  length);
}

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// If statement for the event that no critera are selected.
	if(typesCount === 0) {
		return '';
	}
	
	// For loop for random text, number and symbol generation.
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomfunc[funcName]();
		});
	}
  const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//Math for random Symbol generation.
  var password = generatePassword();
function GetRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function GetRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}

function GetRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}
function GetRandomSymbol(){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
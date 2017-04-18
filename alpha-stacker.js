
// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var text = "";
// The stackLetter function should accept the array as the sole argument

/*
var i;
for (i = 0; i < alphabet.length; i++) {
    text += alphabet[i] + "<br>";
}

var i;
for (i = 0; i < alphabet.length; i++) {
    text += alphabet[i] + "<br>";
}
*/


// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     for(var i = 0; i < theAlphabetArray.length; i++) {
     	if(i % 3 === 0){
     		text += " "
     	}
     	text += theAlphabetArray[i];
     	console.log(text);
     }
}

// Invoke the function and pass in the array
stackLetters(alphabet);
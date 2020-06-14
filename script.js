// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passLength = prompt("Password Length: Please choose a number between 8 and 128.");
    var charUpper = confirm("Do you want Uppercase letters in your password?");
    var charLower = confirm("Do you want Lowercase letters in your password?");
    var charNum = confirm("Do you want numbers in your password?");
    var charSpec = confirm("Do you want special characters in your password?");
    
    var arrayJ = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var arrayZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arrayV = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var arrayK = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/", "?"];
   
  var password = generatePassword();

  function generatePassword() {
        var arrayRandom = [];
        var xPass = [];
       

        if (passLength >= 8 && passLength <=128) {
            for (i=1; i < passLength; i++) {
                if (charUpper) {
                    arrayRandom += arrayZ[Math.floor(Math.random() * arrayZ.length)];
                }
                if (charLower) {
                    arrayRandom += arrayJ[Math.floor(Math.random() * arrayJ.length)];

                }
                if (charNum) {
                    arrayRandom += arrayV[Math.floor(Math.random() * arrayV.length)];
                }
                if (charSpec) {
                    arrayRandom += arrayK[Math.floor(Math.random() * arrayK.length)];
                }
            }
            for (i=1; i <= passLength; i++) {
                xPass += arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
            }
            return xPass;                    
        }                    
        else {
        alert("You did not pick a number correctly. Run the generator again!")
        }
    }     
  


  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

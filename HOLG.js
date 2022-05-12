
var guessNumber = Math.floor(Math.random() * 100)
document.onload = function() {
    guessNumber = Math.floor(Math.random() * 100)
}
var slider = document.getElementById("number");
var output = document.getElementById("slideValue");
var submitButton = document.getElementById("submitButton")
//output.innerHTML = slider.value;
output.innerHTML = guessNumber

slider.oninput = function() {
    output.innerHTML = slider.value;
}
submitButton.onclick = function()
{
    if(slider.value > guessNumber) {
     alert("guessed too high")
    } if(slider.value < guessNumber){
     alert("guess was too low")
    } else (slider.value === guessNumber);
     alert("you win!")   
   }

const fileInput = document.getElementById("imgInput");
fileInput.click();

//Hiding the ugly file input, and making the + button click the ugly file input button
const uglyInput = document.getElementById("imgInput");
const plusButton = document.querySelector("button");


//https://stackoverflow.com/questions/43320231/html5-camera-access-controlling-the-resolution

//Need way to make the button lead to input
//When i click the plus button it should simulate a click on the uglyInput. This works, but
//only if you click the plusButton twice! So I need to try something that'll work on first click
// function clickSimulator(){
//   plusButton.addEventListener('click', function(){
//   uglyInput.click();
//   })
// }

//This way is more straightforward
plusButton.onclick = function(){
  uglyInput.click();
}

//TODO: Html Media Capture doesn't give you a way to specify size apparently. Need to use getUserMedia / Media Stream / Stream API / WebRTC API. But first, read all the tabs abt Html Media Capture. MDN tells you what to do with the photos once the user has captured them. Read about File API on MDN. If you don't go with getUserMedia, see how to skip the retake/use photo screen. Might have to use PhoneGap Camera framework? Read more about canvas element and how it's related to this.

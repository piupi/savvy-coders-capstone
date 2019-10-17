
// const fileInput = document.getElementById("imgInput");
// fileInput.click();

//Hiding the ugly file input, and making the + button click the ugly file input button
const uglyRealInput = document.getElementById("imgInput");
const plusButton = document.querySelector("button");
const customTxt = document.getElementById("custom-text");

//https://stackoverflow.com/questions/43320231/html5-camera-access-controlling-the-resolution

//Need way to make the button lead to input
//When i click the plus button it should simulate a click on the uglyInput. This works, but
//only if you click the plusButton twice! So I need to try something that'll work on first click
function clickSimulator(){
  plusButton.addEventListener('click', function(){
  uglyRealInput.click();
  })
}

//This way is more straightforward than the clickSimulator function.
//But only works if the input is on the actual main page wtf
// plusButton.onclick = function(){
//   uglyRealInput.click();
// }

//Show the file name. Remove this later
uglyRealInput.addEventListener("change", function(){
  if(uglyRealInput.value) {
    customTxt.innerHTML = uglyRealInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    customTxt.innerHTML = "No file chosen yet."
  }
})

//Image Preview
const imgInput = document.getElementById("imgInput");
const previewContainer = document.getElementById('imgPreview');
const previewImage = previewContainer.querySelector(".img-preview__img")
const previewDefaultText = previewContainer.querySelector(".img-preview__default-text")

imgInput.addEventListener("change", function(){
  const file = this.files[0];
  console.log(file);
  if (file) {
    const reader = new FileReader();
    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function(){
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
    // or toDataURL???
  }
})

//TODO: Preview image before file upload? Move the uglyRealInput to the camera page.
//TODO: Then make plusButton go to the CameraPage and press the uglyRealInput

//TODO: Html Media Capture doesn't give you a way to specify size apparently. Need to use getUserMedia / Media Stream / Stream API / WebRTC API. But first, read all the tabs abt Html Media Capture. MDN tells you what to do with the photos once the user has captured them. Read about File API on MDN. If you don't go with getUserMedia, see how to skip the retake/use photo screen. Might have to use PhoneGap Camera framework? Read more about canvas element and how it's related to this.

//Use document.createElement("image or something") when creating the pictures from firebase. take info from database and display it
//Sign in with google?


// Below is trying with getUserMedia.
// const video = document.getElementById('video');

// navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}, audio: false, height: 400})

//   .then(function success(stream) {
//     video.srcObject = stream;
//     video.play();
//   })
//   .catch(function(err){
//     console.log(`Error: ${err}`);
//   });

//   video.addEventListener('canplay', function(e) {
//     if(!streaming) {
//       // set video / canvas height
//       // height = video.videoHeight / (video.videoWidth / width);

//       // video.setAttribute('width', width);
//       // video.setAttribute('height', height);
//       // canvas.setAttribute('width', width);
//       // canvas.setAttribute('height', height);

//       streaming = true;
//     }
//   }, false);

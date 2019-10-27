import { db } from "../firebase";

//Trying something below... is that even a thing?
// export { default as Camera } from "./camera";

// It's a separate function so I can reuse when exiting
export function toggleModal(modalBg) {
  modalBg.classList.toggle("is-showing");
  modalBg.classList.toggle("is-hiding");
}

export function handleCameraModal(st) {
  console.log("cameramodal received", st)
  const plusButton = document.querySelector(".plus-btn");
  const modalBg = document.querySelector(".modal-bg");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".fa-times");

  plusButton.addEventListener("click", function() {
    console.log("+ button clicked");
    toggleModal(modalBg);

    closeButton.addEventListener("click", function() {
      console.log("X button clicked");
      modalBg.classList.remove("is-showing");
      // It closes once but won't close twice if .I give it toggleModal
      // toggleModal(modalBg);
    });

    //WebRTC below
    const video = document.querySelector("#video");
    const canvas = document.querySelector("canvas");

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
        height: 400
      })
      .then(function(localMediaStream) {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(function(err) {
        console.log("An error occurred: " + err);
      });

    document.querySelector("#take-pic").addEventListener("click", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      // changing that to # of pixels squishes image

      // takes pic from webcam
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);

      toggleModal(modalBg); // Modal closes after checkmark is clicked

      console.log(document.querySelector("#caption").value);

      const newPic = {
        src: canvas.toDataURL("image/webp"),
        calories: document.querySelector("#caption").value
      };
      console.log(st.pics);
      st.pics = st.pics.concat([newPic]);
      //updating st.pics
      //concat returns new array unlike push



      // problem: caption does not appear?
    });
  });
}

// Adding delete buttons to each pic
// export default st => {
export function deletePic() {
  const delBtns = document.querySelectorAll(".fa-trash-alt");
  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", function() {
      const div = this.closest("div");
      console.log(div);
    });
  });
}
// Would it delete the box div and the child divs inside of it?

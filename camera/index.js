import { db } from "../firebase";

//Trying something below...
// export { default as Camera } from "./camera";



export function openCameraModal() {
  const plusButton = document.querySelector(".plus-btn");
  const modalBg = document.querySelector(".modal-bg");
  const modal = document.querySelector(".modal");

  plusButton.addEventListener("click", function(){
    console.log("+ button clicked");
    toggleModal(modalBg);
})
}

// It's a separate function so I can reuse later when exiting
export function toggleModal(modalBg){
  modalBg.classList.toggle("is-showing");
  modalBg.classList.toggle("is-hiding");
}

// export default st => {
//   document.querySelector(".plus-btn").addEventListener("click", () => {
//     console.log("+ clicked");
//   })
// }


// when i console.log the + button, it says null. it's always null, maybe because the js loads before the html?
// cannot read property addeventlistener of null


import { db } from "../firebase";

//Trying something below...
// export { default as Camera } from "./camera";



console.log("camera index.js is connected")

function camera() {
  const plusButton = document.querySelector(".plus-btn");
  const modalBg = document.querySelector(".modal-bg");
  const modal = document.querySelector(".modal");

  plusButton.addEventListener("click", function(){
    console.log("function is happening");
    modalBg.classList.toggle("is-showing");
    modalBg.classList.toggle("is-hiding");
    toggleModal(modalBg);
})
}

console.log ("views Home.js connected")

function toggleModal(modalBg){
  modalBg.classList.toggle("is-showing");
  modalBg.classList.toggle("is-hiding");
}


// plusButton.addEventListener("click", toggleModal(modalBg));

console.log(document.querySelector(".plus-btn"))
// when i console.log the + button, it says null. it's always null, maybe because the js loads before the html?
// cannot read property addeventlistener of null

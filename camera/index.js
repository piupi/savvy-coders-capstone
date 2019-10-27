import { db } from "../firebase";

//Trying something below... is that even a thing?
// export { default as Camera } from "./camera";


// It's a separate function so I can reuse when exiting
export function toggleModal(modalBg){
  modalBg.classList.toggle("is-showing");
  modalBg.classList.toggle("is-hiding");
}

export function handleCameraModal() {
  const plusButton = document.querySelector(".plus-btn");
  const modalBg = document.querySelector(".modal-bg");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".fa-times");

  plusButton.addEventListener("click", function(){
    console.log("+ button clicked");
    toggleModal(modalBg);

  closeButton.addEventListener("click", function(){
    console.log("X button clicked");
    modalBg.classList.remove("is-showing");
    // It closes once but won't close twice if I give it toggleModal
    // toggleModal(modalBg);
  })
})
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



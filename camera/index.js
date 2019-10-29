import { db } from "../firebase";


const dbCollection = db.collection("pictures");

export default st => {
 //move dbCollection.get here from handleCameraModal
  if (st.pics.length <= 1) {
    console.log("Pics are trying to show up")
    dbCollection.get().then(
      querySnapshot =>
      (st.pics = querySnapshot.docs.map(doc => {
        const pic = doc.data();
        pic.id = doc.id;
        return pic;
      })
    ))
  }
}



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
    // console.log("+ button clicked");
    toggleModal(modalBg);

    closeButton.addEventListener("click", function() {
      // console.log("X button clicked");
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

      //updating st.pics
      //concat returns new array unlike push

      dbCollection.add(newPic)
      .then(docRef => {
        console.log('pic in add is', newPic)
        newPic.id = docRef.id;
      })
      .catch((err) => (console.log("aaaaaaaah its an error"), err))


      // dbCollection.get().then(querySnapshot =>
      //   (st.pics = querySnapshot.docs.map(doc => {
      //     const pic = doc.data();
      //     pic.id = doc.id; // or docRef.id?
      //     return pic;
      //     // should i have ID in state Home.js ??

      //   })) it shouldnt go here it should be in export default

      //use the one below, not the one above. comment out the if
      // if (!st.pics.length) {
        // dbCollection.get().then(
        //   querySnapshot =>
        //   (st.pics = querySnapshot.docs.map(doc => {
        //     const pic = doc.data();
        //     pic.id = doc.id;
        //     return pic;
        //   })
        // ))
      // }



      st.pics = st.pics.concat([newPic]);


    //   dbCollection.get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {

    //     });
    // });

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
      // Logging div that is going to get deleted
      console.log(div);
      // Trying to actually delete it
      dbCollection.doc(div.dataset.id).delete().then(() => {
        console.log("trying to delete div")
        div.remove();
      });
    });
  });
}
// Would it delete the box div and the child divs inside of it?

import { db } from "../firebase";
import firebase from "@firebase/app";


const dbCollection = db.collection("pictures");

export default st => {
  const delBtns = document.querySelectorAll(".fa-trash-alt");

  // Delete pictures from Firebase and page.
  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", function() {
      console.log("st.pics is:", st.pics);
      const div = this.closest("div");
      dbCollection.doc(div.dataset.id).delete().then(() => {
        console.log("Deleting this div:", div);
        div.remove();
        // Below fixes bug where if you delete a pic then take one, the "deleted" one reappears.
        st.pics = st.pics.filter(pic => pic.id !== div.dataset.id);
      });
    });
  });

 // Get pictures from Firebase.
  if (st.pics.length <= 1) {
    console.log("Pics are trying to show up")
    dbCollection.orderBy('timeAdded').get().then(
      querySnapshot =>
      (st.pics = querySnapshot.docs.map(doc => {
        const pic = doc.data();
        pic.id = doc.id;
        return pic;
      })
    ))
  }
}

// Toggle modal.
export function toggleModal(modalBg) {
  modalBg.classList.toggle("is-showing");
  modalBg.classList.toggle("is-hiding");
}

export function handleCameraModal(st) {
  console.log("camera modal received state:", st)
  const plusButton = document.querySelector(".plus-btn");
  const modalBg = document.querySelector(".modal-bg");
  const closeButton = document.querySelector(".fa-times");

  plusButton.addEventListener("click", function() {
    toggleModal(modalBg);

    closeButton.addEventListener("click", function() {
      modalBg.classList.remove("is-showing");
      // It closes once but won't close twice if you use toggleModal.
    });

    //WebRTC below.
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
        console.log("Error: " + err);
      });

    document.querySelector("#take-pic").addEventListener("click", () => {
      // Prevents bug of multiple pics being taken when modal is opened multiple times.
      event.stopImmediatePropagation();
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Take pic from webcam.
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);

      toggleModal(modalBg); // Modal closes after check mark is clicked.

      function getHumanTime(){
        const time = new Date(Date.now());
        return time.toLocaleTimeString().replace(/:\d+ /, ' ');
      }

      const newPic = {
        src: canvas.toDataURL("image/webp"),
        calories: Number(document.querySelector("#caption").value),
        // timeAdded is for sorting the images by milliseconds.
        timeAdded: Date.now(),
        // prettyTime is only for humans.
        prettyTime: getHumanTime()
      };

      // Updating st.pics.
      // Add a new picture to Firebase.
      // Pic writing process must be wrapped in a promise. Fixes bug of newest pic not deleting.
      return new Promise(resolve => {
        dbCollection.add(newPic)
      .then(docRef => {
        console.log('Pic in add is', newPic)
        newPic.id = docRef.id;
        // Concat returns new array.
        st.pics = st.pics.concat([newPic]);
        resolve(newPic);
      })
      .catch(err => {
        (console.log("Aaaaaaaah its an error"), err);
        resolve(newPic);
      })
    })
    });
  });
}

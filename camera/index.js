import { db } from "../firebase";
import firebase from "@firebase/app";


const dbCollection = db.collection("pictures");

export default st => {
  const delBtns = document.querySelectorAll(".fa-trash-alt");

  delBtns.forEach(delBtn => {
    delBtn.addEventListener("click", function() {
      console.log(st.pics);
      const div = this.closest("div");
      dbCollection.doc(div.dataset.id).delete().then(() => {
        console.log("deleting this div:", div);
        div.remove();
        // Below fixes bug where if you delete a pic, then take one, the "deleted" one reappears
        st.pics = st.pics.filter(pic => pic.id !== div.dataset.id);
      });
    });
  });


 //move dbCollection.get here from handleCameraModal
  if (st.pics.length <= 1) {
    console.log("Pics are trying to show up")
    // replace .orderBy with timestamp or remove
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
    toggleModal(modalBg);

    closeButton.addEventListener("click", function() {
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

      // Trying to add firebase time
      // const timestampMilliseconds = Date.parse(new Date())
      // let fTimestamp = new firebase.firestore.Timestamp.fromMillis(timestampMilliseconds);
      // console.log("Timestamp when pic was added: ", fTimestamp);

      const d = Date(Date.now);
      // console.log(d.toString())

      function humanTime(){
        const time = new Date(Date.now());
        return time.toLocaleTimeString().replace(/:\d+ /, ' ');
      }

      const newPic = {
        src: canvas.toDataURL("image/webp"),
        calories: Number(document.querySelector("#caption").value),
        timeAdded: Date.now(),
        // Put d or humanTime() or Date.now() in timeAdded
        prettyTime: humanTime()
      };

      const fTimestamp = Date.now()
      const formattedTime = humanTime(fTimestamp)
      console.log(formattedTime)

      // humanTime is only for humans
      // Date.now() is for firebase, but map to get human readable date

      // grab the date.now
      // map over it
      // change to humanTime

      //updating st.pics
      //concat returns new array unlike push
      return new Promise(resolve => {
        dbCollection.add(newPic)
      .then(docRef => {
        console.log('pic in add is', newPic)
        newPic.id = docRef.id;
        st.pics = st.pics.concat([newPic]);
        // An attempt to map with humanTime. You can only see the change in timeAdded when you open the object that console logs.
        // st.pics = st.pics.map(newPic.timeAdded = humanTime());
        // Another attempt
        // newPic.timeAdded = newPic.timeAdded.map(humanTime(fTimestamp));
        // resolve(newPic);
      })
      .catch(err => {
        (console.log("aaaaaaaah its an error"), err);
        resolve(newPic);
      })
    })


    });
  });
}

export function postPic() {

}



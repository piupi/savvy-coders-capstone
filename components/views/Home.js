//Using figure as 'the box'
// function generatePics(pics) {
//   // use map and join to iterate over the pics
//   return pics.map(({src, calories}) => `
//     <!-- TODO: Consider simplifying markup and just using <figure> as 'the box.' -->
//     <div class="box">
//       <div class="time">10:00 am</div>
//       <figure>
//         <img src="${src}" alt="" class="food" id="box-5"></<img>
//         <figcaption>${calories}</figcaption>
//       </figure>
//   </div>
//   `).join(" ")
// }


function generatePics(pics) {
  console.log("pics from generatePics" + pics)
  // use map and join to iterate over the pics
  return pics.map(({src, calories}) => `
    <!-- TODO: Consider simplifying markup and just using <figure> as 'the box.' -->
    <div class="box">
      <!-- Add delete button element to pic, click event, console log which div its trying to delete -->
      <span class="fas fa-trash-alt"></span>
      <div class="time">10:00 am</div>
      <img src="${src}" alt="" class="food" id="box-5"></<img>
      <div class="cals">${calories}</div>
    </div>
  `).join(" ")
}


export default (st) => `
  <div class="shoebox">
    ${generatePics(st.pics)}
  </div>
  <div>
    <p id="total" align="right">cal total of day here</p>
  </div>
  <button class="plus-btn" name="add" id="add" id="fa-plus"">
    <span class="fas fa-plus fa-3x"></span>
  </button>
  <div class="navigation">
    <button id="settings" type="button" class="fas fa-cog fa-l"></button>
    <button id="calendar" type="button" class="far fa-calendar-alt fa-lg"></button>
  </div>
  <canvas></canvas>
  <div class="modal-bg is-hiding">
    <div class="modal">
      <span class="fas fa-times fa-lg" id="back"></span>
      <div class="booth">
        <video id="video" width="380"></video>
      </div>
      <p>test modal</p>
      <div>
        <label for="caption">calories</label>
        <input type="text" id="caption"/>
      </div>
      <button class="fas fa-check" id="take-pic"></button>
    </div>
  </div>
`
// This is where I'm making the modal
// Might need to wrap this in another modal like "modal-bg" to grey out bg




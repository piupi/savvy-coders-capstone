function generatePics(pics) {
  // Use map and join to iterate over the pics
  return pics.map(({id, src, calories, prettyTime}) => `
    <div class="box" data-id="${id}">
      <span class="fas fa-trash-alt fa-sm"></span>
      <div class="time">${prettyTime}</div>
      <img src="${src}" alt=""></img>
      <div class="cals">${calories}</div>
    </div>
  `).join(" ")
}

function calculateTotal(pics) {
  let output = 0;
pics.forEach(pic => {
  output += pic.calories;
})
  return output;
}

export default (st) => `
  <div class="shoebox">
    ${generatePics(st.pics)}
  </div>
  <div id="total-box">
    <p id="total" align="right">total: ${calculateTotal(st.pics)}</p>
  </div>
  <button class="plus-btn" id="add" id="fa-plus">
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
      <div class="cal-input-box">
        <input type="number" id="caption" placeholder="calories" />
        <button class="fas fa-check fa-lg" id="take-pic"></button>
      </div>
    </div>
  </div>
  <div class="calendar-modal-bg calendar-hiding">
    <div class="calendar-modal">
    <span class="fas fa-times fa-lg calendarClose" id="back"></span>
    <p>Calendar coming soon :) Might look like this</p>
    <img src="https://i.imgur.com/ZYTofIE.png" id="calendar-img"></img>
    </div>
  </div>
`


// onclick="window.open('https://i.imgur.com/3JO1NFw.png', '_blank')"


function generatePics(pics) {
  // use map and join to iterate over the pics
  return pics.map(({src, calories}) => `
    <!-- TODO: Consider simplifying markup and just using <figure> as 'the box.' -->
    <div class="box">
      <div class="time">10:00 am</div>
      <figure>
        <img src="${src}" alt="" class="food" id="box-5"></<img>
        <figcaption>${calories}</figcaption>
      </figure>
  </div>
  `).join(" ")
}

export default (st) => `
  <div class="shoebox">
    ${generatePics(st.pics)}
  </div>
  <div>
    <p id="total" align="right">cal total here</p>
  </div>
  <button class="btn" name="add" id="add" id="fa-plus"">
    <span class="fas fa-plus fa-3x"></span>
  </button>
  <div class="navigation">
    <button id="settings" type="button" class="fas fa-cog fa-l"></button>
    <button id="calendar" type="button" class="far fa-calendar-alt fa-lg"></button>
  </div>
`

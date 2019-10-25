function generatePics(pics) {
  // use map and join to iterate over the pics
  return pics.map(({src, calories}) => `
    <div class="time">10:00 am</div>
    <figure>
      <img src="${src}" alt="" class="food" id="box-5"></<img>
      <figcaption>${calories}</figcaption>
    </figure>
  `).join(" ")
}

export default (st) => `
  <div class="box">
    ${generatePics(st.pics)}
  </div>
`

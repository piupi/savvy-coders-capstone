import * as views from "./views";

export default (st) => `
<div id="todaysDate"></div>
  <main>
    ${views[st.view](st)}
  </main>
`

//  <!-- TODO: Get the date and convert it (https://www.w3schools.com/tags/tag_time.asp) -
// ->

{/* <div id="todaysDate"><span id="todaysDate"></span></div> */}

// Leaving the date span in there makes page misaligned AF
// <div id="todaysDate"></div>

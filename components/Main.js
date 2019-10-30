import * as views from "./views";

export default (st) => `

  <main>
  <div id="todaysDate"></div>
    ${views[st.view](st)}
  </main>
`

//  <!-- TODO: Get the date and convert it (https://www.w3schools.com/tags/tag_time.asp) -
// ->

{/* <div id="todaysDate"><span id="todaysDate"></span></div> */}

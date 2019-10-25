import * as views from "./views";

export default (st) => `
  <!-- TODO: Get the date and convert it (https://www.w3schools.com/tags/tag_time.asp) -
->  <div id="todaysDate"><span id="todaysDate"></span></div>
  <main>
    ${views[st.view](st)}
  </main>
 `

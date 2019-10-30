import * as views from "./views";

function getDate(){
  const todaysDate = new Date();
  const month = todaysDate.getMonth();
  const date = todaysDate.getDate();
  const day = todaysDate.getDay();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return `${weekdays[day]} ${months[month]} ${date}`;
  }


export default (st) => `
<div id="todaysDate">${getDate()}</div>
  <main>
    ${views[st.view](st)}
  </main>
`

//  <!-- TODO: Get the date and convert it (https://www.w3schools.com/tags/tag_time.asp) -
// ->

{/* <div id="todaysDate"><span id="todaysDate"></span></div> */}

// Leaving the date span in there makes page misaligned AF
// <div id="todaysDate"></div>


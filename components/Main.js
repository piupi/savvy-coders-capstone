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

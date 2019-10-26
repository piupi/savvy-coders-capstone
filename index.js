import * as state from "./store";

import { Main } from "./components";

//Trying something below
import { Camera } from "./camera";

// console.log(state)
// console.log(Main(state.Home));


function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Main(st)}
`;
}


render();



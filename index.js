import * as state from "./store";

import { Main } from "./components";

//Trying something below
import { handleCameraModal } from "./camera";

// import { closeCameraModal } from "./camera";

import { deletePic } from "./camera"; //????

// console.log(state)
// console.log(Main(state.Home));


function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Main(st)}
`;
}


render();

handleCameraModal();

deletePic();


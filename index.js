import * as state from "./store";

import { Main } from "./components";

//Trying something below
import { handleCameraModal } from "./camera";


import { deletePic } from "./camera"; //????

// trying to import default from ./camera/index.js
import camera from "./camera";
import { POINT_CONVERSION_COMPRESSED } from "constants";


// console.log(state)
// console.log(Main(state.Home));




function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Main(st)}
`;


  const proxy = new Proxy(st, {
    set(st, k, v) {
      st[k] = v;
      render(st);
      return true;
    }
  });
  // state, key, and value

  handleCameraModal(proxy);

  // trying to make pics show up without having to add new one first
  camera(proxy);
  // putting that line in makes it render forever?
  // can't press + after that, it flickers
}







render();
// add argument state.Home when trying out camera proxy thing?? or st

deletePic();




// For-loop for total
for (i=0; i < pics.length; i++){
  total += calories[i]
}

import * as state from "./store";
import { Main } from "./components";
import { handleCameraModal, calendarModal, userModal } from "./camera";
import camera from "./camera";


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
  // State, key, and value

  handleCameraModal(proxy);

  // Making pictures show up without having to add new one first
  camera(proxy);

  calendarModal();

  userModal();
}

render();



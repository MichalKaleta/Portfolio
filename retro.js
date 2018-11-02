import { print } from "./src/scripts/main.js";
import "./style/style.scss";
setTimeout(() => print(), 4000);

setTimeout(() => {
  document.onclick = () => {
    window.location.assign("/modern.html");
  };
}, 8000);
//window.location.assign("/modern.html");

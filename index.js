import $ from "jquery";
import { animateTerminal } from "./src/scripts/retro";
import { modernPart } from "./src/scripts/modern";
import "./src/style/modern.scss";

$(function () {
	setTimeout(() => animateTerminal(0), 2000);
	modernPart();
});

import $ from "jquery";
import { animateTerminal } from "./src/scripts/retro";
import "./src/style/modern.scss";

$(function () {
	setTimeout(() => {
		animateTerminal();
	}, 0);
});

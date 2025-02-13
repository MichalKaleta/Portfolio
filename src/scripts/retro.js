import $ from "jquery";
import { modernPart } from "./modern";
import "../style/retro.scss";

const TEXTS = {
	screen: `Login ...OK!
<Loading ............ DONE!<80_style.css ....... DONE!
< Update avalible: modern style<
Restart Server?<
..............
<Press Any Key `,
	data: `user: <Michal Kaleta <<
phone nr: <696 471 251 <<
e-mail: < mic.kaleta@gmail.com`,
};

const elements = {
	humm: $("#humm-sound"),
	stuk: $("#stuk-sound"),
	mainScreen: $("#main-screen"),
	data: $("#data-section"),
	modern: $("#modern"),
	retro: $("#retro"),
};

let hummStarted = false;

export function animateTerminal(i = 0) {
	if (!hummStarted) {
		window.focus();
		elements.humm.prop("volume", 0.1).trigger("play");
	}
	elements.stuk.trigger("play");
	const processChar = (char) => (char === "<" ? "</br>" : char);
	elements.mainScreen.append(processChar(TEXTS.screen[i]));
	elements.data.append(processChar(TEXTS.data[i]));

	if (i < TEXTS.screen.length) {
		setTimeout(() => animateTerminal(++i), 20);
	} else {
		elements.mainScreen.append('<span class="cursor">y</span>');
		document.onclick = () => {
			elements.humm.prop("volume", 0).trigger("stop");
			elements.retro.hide();
			elements.modern.show();

			modernPart();
		};
	}
}

import $ from "jquery";

const win = $(window);
const winHeight = window.innerHeight;
const $polaroid = $("#polaroid");
const $skillImages = $("#skills img");
const skillHeight = $skillImages.height();
const skillFromTop = $("#skills").offset().top - winHeight * 1.1 + skillHeight;
const $footnotesEl = $(".update.update__footnote");
const stickyNotesTexts = "asdf";
const $stickyNoteEl = $(
	`<div class='update__sticky-wraper' style='position: absolute'>
		<div class='update__sticky-shadow'></div>
			<div class='update__sticky-note'>
				${stickyNotesTexts}
			</div>	
	</div>`
);

const footNotesTexts = ["experienced", "lala", "la", "adf", "asdf", "fad"];
let skillIsShown = false;
let polaroidIsShown = false;

export const modernPart = () => {
	$(function () {
		const $stickyEl = $(".update.update__sticky");
		const [width, height] = [$stickyEl.width(), $stickyEl.height()];
		const offseet = $stickyEl.offset();

		$stickyNoteEl.offset(offseet);
		$stickyNoteEl.css({ width, height });
		$("#modern").append($stickyNoteEl);
		$footnotesEl.each(function (i) {
			$(this).append(
				`<p class='update__footnote-text'> ${footNotesTexts[i]} </p>`
			);
		});

		function showSkills() {
			$skillImages.each((i) => {
				setTimeout(() => {
					$skillImages.eq(i).addClass("show");
					setTimeout(() => {
						$skillImages.eq(i).addClass("new_transition");
					}, 800);
				}, 150 * i);
			});
			skillIsShown = true;
		}

		win.on("scroll", () => {
			const fromTop = win.scrollTop();

			if (polaroidIsShown && fromTop > winHeight * 0.8) {
				$polaroid.addClass("hide");
				polaroidIsShown = false;
			} else if (!polaroidIsShown && fromTop <= 0.8 * winHeight) {
				$polaroid.removeClass("hide");
				polaroidIsShown = true;
			}
			if (!skillIsShown && fromTop >= skillFromTop) {
				showSkills();
			}
		});
	});
};

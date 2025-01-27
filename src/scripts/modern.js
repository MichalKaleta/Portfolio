import $ from "jquery";

export const modernPart = () => {
	const elements = {
		h1: $("#modern-header h1"),
		h2: $("#modern-header h2"),
		polaroid: $("#polaroid"),
		skillImages: $("#skills img"),
		header: {
			h1Font: 0,
			h1Margin: parseInt($("#modern-header h1").css("margin-top"), 10),
		},
	};

	let isExecuted = false;

	const init = () => {
		elements.h1.show();
		elements.h2.show();

		const targetSize =
			$(window).width() <= 550
				? { initial: "2.5em", final: "58px" }
				: { initial: "5.5em", final: "108px" };

		elements.h2
			.animate({ fontSize: targetSize.initial })
			.animate({ fontSize: targetSize.final }, updateH1Font);
	};

	const updateH1Font = () => {
		elements.header.h1Font = parseInt($("header h1").css("fontSize"), 10);
	};

	const updateHeader = (scrollPos) => {
		const headerSpan = $("#header-content");
		headerSpan.css({
			transform: `translate(0px, ${scrollPos / 2}px)`,
		});

		$("#modern-header h1").css({
			fontSize: elements.header.h1Font - scrollPos / 16,
			marginTop: elements.header.h1Margin + scrollPos / 16,
			marginBottom: elements.header.h1Margin + scrollPos / 16,
		});

		if ($(window).width() >= 550) {
			$("#modern-header h2").css({
				fontSize: `${108 - scrollPos / 10}px`,
			});
		}
	};

	const showSkills = () => {
		elements.skillImages.each((i, el) => {
			setTimeout(() => {
				$(el)
					.addClass("pokaz")
					.delay(800)
					.queue(() => $(el).addClass("set_transition").dequeue());
			}, 150 * i);
		});
	};

	const toggleDescription = () => {
		$("#opis")
			.toggleClass("rotation")
			.delay(500)
			.queue(function () {
				$(this).toggle().dequeue();
			});
	};

	// Event Listeners
	$(".rotate").on("click", toggleDescription);

	$(window).on("scroll", () => {
		const scrollPos = $(window).scrollTop();
		updateHeader(scrollPos);

		if (scrollPos > 1250) showSkills();
		if (scrollPos > 400 && !isExecuted) {
			$(".about_me__container").addClass("about_me__container--show");
			isExecuted = true;
		}

		elements.polaroid.toggleClass("hide", scrollPos > 350);
	});

	init();
};

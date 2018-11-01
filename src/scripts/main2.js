import "../style/style2.scss";

export const script = $(document).ready(function() {
  let $h1 = $("h1");
  let $h2 = $("h2");
  let $header = $("header");
  let photo_right = parseInt($("#photo").css("right"), 10);
  let h1_font = 0;
  let h1_margin = parseInt($("header h1").css("margin-top"), 10);
  let once_executed = false;

  $header.fadeIn().css({
    display: "flex"
  });

  function start() {
    $h1.show();
    $h2.show();

    if ($(window).width() <= 550) {
      $h2.animate(
        {
          fontSize: "2.5em"
        },
        function() {
          $h2.animate(
            {
              fontSize: "58px"
            },
            function() {
              czytaj();
            }
          );
        }
      );
    } else {
      $h2.animate(
        {
          fontSize: "5.5em"
        },
        function() {
          $h2.animate(
            {
              fontSize: "108px"
            },
            function() {
              czytaj();
            }
          );
        }
      );
    }
  }

  function czytaj() {
    h1_fobnt = parseInt($("header h1").css("fontSize"), 10);
    h2_font = parseInt($("header h2").css("font-size"), 10);
  }

  function naglowek($win_scroll) {
    $("header span").css({
      transform: "translate( 0px  , " + $win_scroll / 2 + "px)"
    });

    $("header span h1").css({
      fontSize: h1_font - $win_scroll / 16,
      "margin-top": h1_margin + $win_scroll / 16,
      "margin-bottom": h1_margin + $win_scroll / 16
    });

    if ($(window).width() >= 550) {
      $("header span h2").css({
        fontSize: " " + 108 - $win_scroll / 10
      });
    }
  }

  function skills() {
    console.log("skills");
    $("#skills img").each(function(i) {
      setTimeout(function() {
        $("#skills img")
          .eq(i)
          .addClass("pokaz");
      }, 150 * i);
    });
  }

  function opacity() {
    if (!once_executed) {
      $(".opis").css({ opacity: "1" }, 1000);
      once_executed = true;
    }
  }

  function obrot() {
    $(".opis").toggleClass("rotation");
    setTimeout(function() {
      $(".opis").toggle();
    }, 500);
  }
  function foto_obrot($win_scroll) {
    $("#photo").css({
      transform: "rotate(  -" + ($win_scroll - 350) / 6 + "deg)",
      right: photo_right - ($win_scroll - 350)
    });
  }
  ////////////////////START///////////////////////////
  start();
  //////////ROTATE OPIS////////////////////////
  $(".rotate").on("click", obrot);

  //////////SCROLL hy-yyyyyyy b34444444444444EVENTTS///////////////////////////////
  $(window).scroll(function() {
    var $win_scroll = $(window).scrollTop();

    naglowek($win_scroll);

    if ($win_scroll > 1550) {
      skills();
    }

    if ($win_scroll > 400) {
      opacity();
    }
    if ($win_scroll > 350) {
      foto_obrot($win_scroll);
    }
  });
});

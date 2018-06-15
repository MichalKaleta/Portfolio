
export var screen_text = `Login ...OK!
<Loading ............ DONE!<80_style.css ....... DONE!
< Update avalible: modern style<
Restart Server?<
..............
<Press Any Key `,

      data_text   =  `user: <Michal Kaleta <<
                      phone nr: <696 471 251 <<
                      e-mail: < mic.kaleta@gmail.com`,
      blip = $(".blip"),
      cursor_tag = '<div class="cursor">Y</div>',
      cursor = $(cursor_tag),
      humm = $('.humm'),
      main_console = $('.console'),
      main_screen = $('.main-screen'),
      data = $('.data'),
      animation_complete = false;

  humm.prop('volume', 0.1);
  humm.trigger('play');

  export function print(i) {

    $(".stuk").trigger('play');
    var char_text = screen_text.substring(i, i + 1);
    var char_data = data_text.substring(i, i + 1);
    if (char_text == '<') char_text = '</br>';
    if (char_data == '<') char_data = '</br>';
    main_screen.append(char_text);
    data.append(char_data);
    if (i < screen_text.length) {
        setTimeout(function() {
            print(++i);
        }, 20);
    } else{
        main_screen.append(cursor);
        animation_complete =true;
      }
    };

  export function turn_off_console() {
    /*   blip.trigger('play');
      main_screen.fadeOut(600);
      data.fadeOut(600);
      $('img , .overlay').fadeOut(600) */
      main_console.addClass('turned-off');
  
    }

var screen_text = `Login ...OK!
<Loading ............ DONE!<80_style.css ....... DONE!
< Update avalible: modern style<
Restart Server?<
..............
<Press Any Key `,
  data_text = `user: <Michal Kaleta <<
                      phone nr: <696 471 251 <<
                      e-mail: < mic.kaleta@gmail.com`,
  blip = $(".blip"),
  cursor_tag = '<span class="cursor">y</span>',
  cursor = $(cursor_tag),
  humm = $(".humm"),
  main_screen = $(".main-screen"),
  data = $(".data");

humm.prop("volume", 0.1);
humm.trigger("play");
let i = 0;
export function print() {
  $(".stuk").trigger("play");
  let char_text = screen_text.substring(i, i + 1);
  let char_data = data_text.substring(i, i + 1);
  if (char_text == "<") char_text = "</br>";
  if (char_data == "<") char_data = "</br>";
  main_screen.append(char_text);
  data.append(char_data);
  if (i < screen_text.length) {
    setTimeout(function() {
      print(++i);
    }, 20);
  } else main_screen.append(cursor);
}

const { JSMidi } = require('@jsmidi/core');

/**
 * This is the first measure of the classic Amen break beat.
 * See if you can add the next measure. Check out the drum pattern
 * at https://en.wikipedia.org/wiki/Amen_break.
*/
class Live {
  static reload() {
    JSMidi.resetTracks();
    JSMidi.loop.setTempo(120);

    const { drums } = JSMidi.tracks;
    const { notes } = JSMidi.builder;

    // Ride double time.
    drums.at('*:*:*', [
      notes('D#3').hold(0.5),
      notes('D#3').hold(0.5).after(0.5),
    ]);

    // Kick pattern.
    drums.pattern('1:1:1,5', notes('C2'), [
      0.5, 0.5, -1.5, 0.25, 0.25
    ])

    // Snare pattern.
    drums.pattern('1:1:1,5', notes('D2'), [
      -1, 0.75, 0.5, 0.75, 0.25
    ])
  }
}

return Live;

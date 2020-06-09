const { JSMidi } = require('@jsmidi/core');

class Live {
  static reload() {
    JSMidi.resetTracks();
    JSMidi.loop.setTempo(120);

    const { notes, chord, rest } = JSMidi.builder;

    const { drums, ambient, classic, bells, fast, pulse, plasma } = JSMidi.tracks;

    /**
     * Electronic Pop
     * ----------------------------------------------------
     * Our drum kit.
     * Channel 0 (1 in Logic)
     */

    // high hat
    drums.at('2,3,4,5,6,7,8,9:*:*', [
      notes('F#2').h(0.5).v(50),
      notes('F#2').h(0.5).a(0.5).v(80),
    ]);

    // kick & snare
    drums.play('2,3,4,5,6,7,8,9:*:@1', notes('C2').h(0.5));
    drums.play('3,4,5,6,7,8,9:*:@2', notes('D2').h(0.5));

    // accents
    drums.sequence('*:*:8', [
      notes('D3').h(0.5),
      notes('D3').h(0.5),
    ]);

    drums.sequence('3,6,8:8:8', [
      notes('E2').h(0.5),
      notes('E2').h(0.5),
    ]);

    drums.sequence('3,6,8:8:8', [
      notes('B2').h(0.5),
      notes('B2').h(0.5),
    ]);

    // clap
    drums.pattern('5,10:*:1', notes('A#3').v(80), [
      0.5, 1, 0.5, 1, 0.5
    ])

    /**
     * Ambient Lead
     * ----------------------------------------------------
     * Lead sequence/arpegiator.
     * Channel 1 (2 in Logic)
     */

    ambient.sequence('4,7,9:*:1', [
      notes('F4').h(0.5).v(50),
      notes('C5').h(1).v(50),
      notes('F4').h(0.5).v(50),
      notes('G4').h(1).v(50),
      notes('F4').h(0.5).v(50),
      notes('A4').h(1).v(50),
      notes('F4').h(0.5).v(50),
      notes('G4').h(1).v(50),
      notes('F4').h(1).v(50),
      notes('G4').h(2).v(50),
    ]);

    /**
     * Classic Pad
     * ----------------------------------------------------
     * Chrous fills.
     * Channel 2 (3 in Logic)
     */

    classic.play('4,7,9:@1:1', notes(['F3', 'F4']).h(6));
    classic.play('4,7,9:@1:7', notes(['G3', 'G4']).h(2));
    classic.play('4,7,9:@2:1', notes(['A3', 'A4']).h(6));

    /**
     * String Bells
     * ----------------------------------------------------
     * This acts as our melodic lead.
     * Channel 3 (4 in Logic)
     */

    bells.sequence('3,6,8:1,5:1', [
      notes('C4').h(6),
      notes('D4').h(2),
    ]);

    bells.play('3,6,8:2,6:1', notes('F3').h(4));

    bells.sequence('3,6,8:3,7:1', [
      notes('G3').h(6),
      notes('C4').h(2),
    ]);

    bells.play('3,6,8:4,8:1', notes('F3').h(4));


    /**
     * Fast Pad
     * ----------------------------------------------------
     * This acts as a deep bass accent.
     * Channel 4 (5 in Logic)
     */

    fast.play('2,3,5,8:*:1', notes('F2').h(1).v(127));


    /**
     * Micro Pulse
     * ----------------------------------------------------
     * This acts as our bass lead.
     * Channel 5 (6 in Logic)
     */

    pulse.sequence('2,5,10:*:0', [
      notes('F2').h(0.5),
      notes('F2').h(0.5),
    ]);

    pulse.sequence('3,6,8:*:1', [
      notes('F2').h(0.5),
      notes('F2').h(0.5),
      rest(1),
      notes('A2').h(0.5),
      notes('A2').h(0.5),
      notes('D2').h(0.5),
      notes('D2').h(0.5),
      rest(1),
      notes('D2').h(0.5),
      notes('D2').h(0.5),
      notes('C2').h(0.5),
      notes('C2').h(0.5),
    ]);

    pulse.sequence('4,7,9:@1:1', [
      notes('D2').h(1),
      notes('D3').h(0.5),
      rest(2),
      notes('D3').h(1),
      notes('D3').h(1),
      notes('D2').h(0.5),
      notes('C3').h(1),
      notes('C3').h(0.5),
    ]);

    pulse.sequence('4,7,9:@2:1', [
      notes('F2').h(1),
      notes('F3').h(0.5),
      rest(2),
      notes('F3').h(1),
      notes('F3').h(1),
      notes('F2').h(0.5),
      notes('G3').h(1),
      notes('G3').h(0.5),
    ]);


    /**
     * Floating Plasma
     * ----------------------------------------------------
     * Ambient transitions and fills.
     * Channel 6 (7 in Logic)
     */

    // intro
    plasma.sequence('1:1:1', [ notes('F2').h(6).v(80) ]);
    plasma.sequence('1:2:1', [ notes('D2').h(6).v(90) ]);

    // pre chorus
    plasma.sequence('5,10:1:1', [ notes('A3').h(6).v(100) ]);
    plasma.sequence('5,10:2:1', [ notes('F3').h(6).v(90) ]);

    // verse
    plasma.play('2,3,5,6,8:@1:1', notes('F3').h(1).v(127));
    plasma.play('2,3,5,6,8:@2:1', notes('C3').h(1).v(127));
  }
}

return Live;

const {
  JSMidi,
  JSMidiProject,
  JSMidiInstrument
} = require('@jsmidi/core');

class Project extends JSMidiProject {
  setup() {
    // 10 part song.
    JSMidi.loop.update({
      parts: [
        { bars: 2, beats: 8 }, // 1
        { bars: 2, beats: 8 }, // 2
        { bars: 8, beats: 8 }, // 3
        { bars: 4, beats: 8 }, // 4
        { bars: 2, beats: 8 }, // 5
        { bars: 8, beats: 8 }, // 6
        { bars: 4, beats: 8 }, // 7
        { bars: 8, beats: 8 }, // 8
        { bars: 4, beats: 8 }, // 9
        { bars: 1, beats: 8 }, // 10
      ]
    });

    const drums = new JSMidiInstrument('drums', { channel: 0 });
    const ambient = new JSMidiInstrument('ambient', { channel: 1 });
    const classic = new JSMidiInstrument('classic', { channel: 2 });
    const bells = new JSMidiInstrument('bells', { channel: 3 });
    const fast = new JSMidiInstrument('fast', { channel: 4 });
    const pulse = new JSMidiInstrument('pulse', { channel: 5 });
    const plasma = new JSMidiInstrument('plasma', { channel: 6 });

    JSMidi.addTracks([
      drums, ambient, classic, bells, fast, pulse, plasma
    ]);
  }
}

return Project;

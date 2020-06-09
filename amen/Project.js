const {
  JSMidi,
  JSMidiProject,
  JSMidiInstrument
} = require('@jsmidi/core');

/**
* Here we setup the loop and add a drum track on the default channel.
* We are using Logic Pro X and the "Bluebird" drum kit.
*/
class Project extends JSMidiProject {
  setup() {
    JSMidi.loop.update({ bars: 1, beats: 8, repeat: true });

    const drums = new JSMidiInstrument('drums');

    JSMidi.addTracks([drums]);
  }
}

return Project;

// midi-extension.js
class MIDIExtension {
  constructor() {
    this.inputs = {};
    this.latestData = { note: 0, velocity: 0, channel: 0 };
    this._setupMIDI();
  }

  getInfo() {
    return {
      id: 'midiExtension',
      name: 'MIDI Connector',
      color1: '#5c9eff',
      color2: '#417dff',
      blocks: [
        {
          opcode: 'getNote',
          blockType: Scratch.BlockType.REPORTER,
          text: 'last MIDI note',
        },
        {
          opcode: 'getVelocity',
          blockType: Scratch.BlockType.REPORTER,
          text: 'last velocity',
        },
        {
          opcode: 'getChannel',
          blockType: Scratch.BlockType.REPORTER,
          text: 'last channel',
        },
        {
          opcode: 'midiNoteReceived',
          blockType: Scratch.BlockType.HAT,
          text: 'when MIDI note received',
        },
      ]
    };
  }

  _setupMIDI() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then((midiAccess) => {
        for (const input of midiAccess.inputs.values()) {
          this._listenToMIDI(input);
        }
        midiAccess.onstatechange = (event) => {
          if (event.port.type === 'input' && event.port.state === 'connected') {
            this._listenToMIDI(event.port);
          }
        };
      }, (err) => {
        console.error('MIDI access error:', err);
      });
    } else {
      console.error('Web MIDI API not supported in this browser.');
    }
  }

  _listenToMIDI(input) {
    if (this.inputs[input.id]) return;
    this.inputs[input.id] = input;
    input.onmidimessage = (msg) => {
      const [status, note, velocity] = msg.data;
      const command = status >> 4;
      const channel = status & 0xf;

      if (command === 9 && velocity > 0) { // Note on
        this.latestData = { note, velocity, channel };
        this._triggerHats();
      }
    };
  }

  _triggerHats() {
    Scratch.vm.runtime.startHats('midiExtension_midiNoteReceived', {});
  }

  getNote() {
    return this.latestData.note;
  }

  getVelocity() {
    return this.latestData.velocity;
  }

  getChannel() {
    return this.latestData.channel;
  }

  midiNoteReceived() {
    return true;
  }
}

Scratch.extensions.register(new MIDIExtension());

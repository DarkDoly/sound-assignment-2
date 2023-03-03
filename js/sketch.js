let slider;
const synth = new Tone.PolySynth();
const reverb = new Tone.JCReverb();
synth.connect(reverb);

let notes = {

  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5',
  'l': 'D5'

}

function setup() {
  createCanvas(400, 400);
  slider = new Nexus.Slider("#slider")
  reverb.toDestination();
  slider.on('change',(v) => {
    reverb.roomSize.value = v;
  })
}

function draw() {
  background(220);
}

function keyPressed() {
  let whatNote = notes[key]
  synth.triggerAttackRelease(whatNote, "8n");
}
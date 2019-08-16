import * as Tone from "tone";

/*
 * Values:
 *  playback - prioritizes sustained playback
 *  balanced - balances latency & performance
 *  interactive - low latency (default)
 *  fastest - lowest latency
 */
Tone.context.latencyHint = "playback";

const crusher = new Tone.BitCrusher(3).toMaster();
const synth = new Tone.MembraneSynth({
    release: .8
}).connect(crusher);

// const loop = new Tone.Loop(time => {
//     synth.triggerAttackRelease("C2", "2n", time);
// }, "2n").start("1m");

const notes = [
    "G2",
    [null, "G2"],
    null,
    "Bb2",
    "C3",
    "G2",
    [null, "G2"],
    null,
    "F2",
    "F#2"
];

const sequence = new Tone.Sequence(
    (time, note) => synth.triggerAttackRelease(note, "6n", time),
    notes,
    "6n"
);
sequence.start();

Tone.Transport.start("+1m");


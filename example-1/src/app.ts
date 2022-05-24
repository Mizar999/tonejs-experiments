import * as Tone from "tone";

/*
 * Values:
 *  playback - prioritizes sustained playback
 *  balanced - balances latency & performance
 *  interactive - low latency (default)
 *  fastest - lowest latency
 */
const context = new Tone.Context({ latencyHint: "playback" });
Tone.setContext(context);

const crusher = new Tone.BitCrusher().toDestination();
const synth = new Tone.MembraneSynth({
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

document.querySelector('button').addEventListener('click', async () => {
    await Tone.Transport.start("+4n");
});

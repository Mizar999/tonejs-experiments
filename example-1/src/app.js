"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tone = require("tone");
/*
 * Values:
 *  playback - prioritizes sustained playback
 *  balanced - balances latency & performance
 *  interactive - low latency (default)
 *  fastest - lowest latency
 */
Tone.context.latencyHint = "playback";
var crusher = new Tone.BitCrusher().toDestination();
var synth = new Tone.MembraneSynth({}).connect(crusher);
// const loop = new Tone.Loop(time => {
//     synth.triggerAttackRelease("C2", "2n", time);
// }, "2n").start("1m");
var notes = [
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
var sequence = new Tone.Sequence(function (time, note) { return synth.triggerAttackRelease(note, "6n", time); }, notes, "6n");
sequence.start();
Tone.Transport.start("+4n");

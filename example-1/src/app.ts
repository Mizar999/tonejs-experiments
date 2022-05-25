import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");
synth.triggerAttackRelease("C5", "8n", 1);
synth.triggerAttackRelease("C4", "8n", 2);
synth.triggerAttackRelease("C5", "8n", 3);

document.getElementById("play-button").addEventListener("click", async () => {
	await Tone.start();
});

import * as Tone from "tone";

document.getElementById("play-button").addEventListener("click", async () => {
	await Tone.start();
	const synth = new Tone.Synth().toDestination();
	var myNow = Tone.now();
	synth.triggerAttackRelease("C4", "8n", myNow + 1);
	synth.triggerAttackRelease("C5", "8n", myNow + 2);
	synth.triggerAttackRelease("C4", "8n", myNow + 3);
	synth.triggerAttackRelease("C5", "8n", myNow + 4);
});

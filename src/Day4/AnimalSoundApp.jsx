import React, { useRef } from "react";
import dogSound from "../Assets/Sound/Medium-dog-barking-sound-effect.mp3";
import catSound from "../Assets/Sound/Original-cat-sound-meow.mp3";
import cowSound from "../Assets/Sound/Cow-sound-effect.mp3";
import sheepSound from "../Assets/Sound/Sheep-sound-meh.mp3";

const animals = [
	{ name: "Dog", soundUrl: dogSound },
	{ name: "Cat", soundUrl: catSound },
	{ name: "Cow", soundUrl: cowSound },
	{ name: "Sheep", soundUrl: sheepSound },
];

function AnimalSoundApp() {
	const currentAudioRef = useRef(null); // store the currently playing audio

	const playSound = (soundUrl) => {
		// Stop any previously playing sound
		if (currentAudioRef.current) {
			currentAudioRef.current.pause();
			currentAudioRef.current.currentTime = 0;
		}

		// Create and play new sound
		const audio = new Audio(soundUrl);
		audio.play().catch((e) => console.error("Audio error:", e));

		// Store the current audio
		currentAudioRef.current = audio;
	};

	return (
		<div style={{ textAlign: "center", marginTop: 50 }}>
			<h1>Animal Sound App</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "20px",
					flexWrap: "wrap",
					marginTop: 20,
				}}
			>
				{animals.map(({ name, soundUrl }) => (
					<button
						key={name}
						onClick={() => playSound(soundUrl)}
						style={{
							padding: "15px 25px",
							fontSize: "16px",
							borderRadius: "8px",
							cursor: "pointer",
							border: "1px solid #333",
							backgroundColor: "#f0f0f0",
							minWidth: 100,
						}}
					>
						{name}
					</button>
				))}
			</div>
		</div>
	);
}

export default AnimalSoundApp;

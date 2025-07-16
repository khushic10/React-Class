import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function EmojiPickerComponent() {
	const [text, setText] = useState("");
	const [showPicker, setShowPicker] = useState(false);

	const onEmojiClick = (emojiData) => {
		setText((prev) => prev + emojiData.emoji);
	};

	return (
		<div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
			<h2>Emoji Picker</h2>

			<textarea
				rows={4}
				style={{ width: "100%", fontSize: "16px" }}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<div style={{ marginTop: "10px" }}>
				<button onClick={() => setShowPicker(!showPicker)}>
					{showPicker ? "Hide Picker" : "Show Emoji Picker"}
				</button>
			</div>

			{showPicker && (
				<div style={{ marginTop: "10px" }}>
					<EmojiPicker onEmojiClick={onEmojiClick} />
				</div>
			)}
		</div>
	);
}

export default EmojiPickerComponent;

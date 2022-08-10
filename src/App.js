import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojipedia = {
    "🤪": "Zany Face",
    "🤑": "Money-Mouth Face",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "🤥": "Lying Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face"
  };

  const emojiArray = Object.keys(emojipedia);

  const showMeaning = (emoji) => {
    var emojiMeaning = emojipedia[emoji];
    setMeaning(emojiMeaning);
  };

  const handleChange = (e) => {
    var inputEmoji = e.target.value;
    var emojiMeaning = emojipedia[inputEmoji];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Sorry! could not find it in database.";
    }
    setMeaning(emojiMeaning);
  };

  return (
    <div className="App">
      <div className="emojipedia">
        <h1>Emojipedia</h1>
        <img
          src="https://emojipedia.org/static/0c93ef5f62ceb11bf902.png"
          alt="emojipedia"
        />
      </div>
      <input onChange={handleChange} />
      <p>{meaning}</p>
      <h4>Emojis already you know</h4>
      {emojiArray.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => showMeaning(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

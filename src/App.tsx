import React, { useState } from "react";
import "./App.css";

enum UserNameStatus {
  invalid = "invalid",
  verified = "verified",
  unverified = "unverified",
}

function App() {
  const [username, setUsername] = useState<string>("");

  const typeOfUsername = (): UserNameStatus => {
    //Insert your code here
    if (username.length > 25) return UserNameStatus.invalid;

    const vowels: string[] = ["a", "e", "i", "o", "u"];
    const numberOfVowels: number = username
      .split("")
      .filter((letter: string) => vowels.includes(letter)).length;
    const numberOfConsonants: number = username.length - numberOfVowels;
    const difference = numberOfVowels * numberOfConsonants;
    const isOdd = difference % 2;

    if (isOdd) return UserNameStatus.verified;

    return UserNameStatus.unverified;
  };

  let textboxColor: string;
  switch (typeOfUsername()) {
    case UserNameStatus.invalid:
      textboxColor = "red";
      break;
    case UserNameStatus.verified:
      textboxColor = "blue";
      break;
    case UserNameStatus.unverified:
      textboxColor = "gray";
      break;
  }

  return (
    <div className="App">
      <input
        className={`username-textbox ${textboxColor}`}
        placeholder="Enter username here"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username && <div className="status">{typeOfUsername()}</div>}
    </div>
  );
}

export default App;

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1.Create Entry Component
//2. Create props to replace hardcoded data
//3a. Import the emojipedia const.
//3b. Map through the emojipedia array and render Entry components.

function createEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

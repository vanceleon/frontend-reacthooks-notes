import React, { useState } from 'react';

export default function NoteList() {
  // Declare a new state variable, which we'll call "count"
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>You clicked {number} times</p>
      <button onClick={() => setNumber(number + 1)}>Click me</button>
    </div>
  );
}

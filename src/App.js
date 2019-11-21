// import React, {useState} from 'react';
import React, {useState} from 'react';
import './App.css';
import NoteList from './components/noteList';

const initialState = {
  notes: [],
  note: {},
  title: '',
  text: ''
}

function App() {
  const [text, setTextBody] = useState(initialState);
 

  const onChange = ev => {
    ev.preventDefault();
    setTextBody({[ev.target.name]: ev.target.value})
  }

  console.log("this is a test git")


  return (
    <div>Rendering</div>
  );
}

export default App;
 
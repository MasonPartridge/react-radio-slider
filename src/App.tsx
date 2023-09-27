import './App.css';
import ReactRadioSlider from './components/ReactRadioSlider';
import { useState } from "react";
function App() {
const [value, setValue] = useState(50);
const radioOptions = [
  <div className='red-box'></div>,
  <div className='red-box'></div>,
  <div className='red-box'></div>,
];
  return (
    <div className="App App-header">
      <ReactRadioSlider onChange={setValue} value={value} radioOptions={radioOptions} optionWidth={300}/>
      <h1>{value}</h1>
    </div>
  );
}

export default App;

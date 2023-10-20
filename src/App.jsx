import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [msg, setMsg] = useState('');

  
  const calcBmi = (e) => {
    e.preventDefault();
    
    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height / 100) * (height / 100));
      setBmi(bmi.toFixed(2));

      //message logic

      if (bmi < 18.5) {
        setMsg("You are Underweight.")
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMsg("You are Healthy")
      } else if (bmi >= 24.9 && bmi < 30) {
        setMsg("You are Overweight")
      } else {
        setMsg("You are Obese")
      }
    }
  }

  let imgSrc;

  if(bmi < 1){
    imgSrc = null;
  } else if (bmi < 18.5){
    imgSrc = require('../images/underweight.png');
  } else if (bmi >= 18.5 && bmi < 24.9) {
    imgSrc = require('../images/healthy.png');
  } else if (bmi >= 24.9 && bmi < 30) {
    imgSrc = require('../images/overweight.png');
  } else {
    imgSrc = require('../images/obese.png');
  }


  const reload = () => {
    window.location.reload()
  }
  
  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label >Weight (in kgs)</label>
            <input type="text" placeholder='0' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label >Height (in cm)</label>
            <input type="text" placeholder='0' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn btn-outline" onClick={reload}>ReCalculate</button>
          </div>
        </form>
        <div className="center">
          <h2>Your BMI is: <span className='score'>{bmi}</span></h2>
          <p>{msg}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=" " />
        </div>
      </div>
    </div>
  )
}

export default App

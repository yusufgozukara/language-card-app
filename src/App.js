
import './App.css';
import react from "./components/assets/react.svg"
import Card from './components/card/Card';
import {languages} from "./components/helper/data"

function App() {
  return (
    <div className='container'>
      <div className="reactimage">
        <img style={{width:'25%', margin:'3rem 0 2rem'}} src={react} alt="reactimage" />
      </div>
      <div className="card">
        <h1>Languages</h1>
        <div className="minicarddiv">
          {languages.map((item,index) => <Card {...item} key={index}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;

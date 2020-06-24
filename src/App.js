import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Daily from './card/daily';

function App() {
  const [nasa,setNasa] = useState([]);
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=SDN68j1Ko9ZhE9ZhIo3l1blt4PdE1xlTHh924J4m')
    .then((res) => {
      console.log(res);
      setNasa(res.data)
    })
    .catch((er) => {
      console.log(er);
    });
  }, []);
  return (
    <div className="App">
      <Daily title={nasa.title} date={nasa.date} explanation={nasa.explanation} url={nasa.url}/>
    </div>
  );
}

export default App;

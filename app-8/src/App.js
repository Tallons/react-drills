import React from 'react';
import './App.css';

import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      obiWanKenobi: ""
    }
  }

  componentDidMount(){
  axios.get("https://swapi.co/api/people/10")
  .then(res => { this.setState({obiWanKenobi: res.data})
  })
  .catch(() => console.log("error in loading database"))


  }


  render(){
    console.log(this.state.obiWanKenobi.name)
    return (
      <div className="App">
        <h1>Name: {this.state.obiWanKenobi.name}</h1>
        <h1>Birth Year: {this.state.obiWanKenobi.birth_year}</h1>
        <h1>Height:  {this.state.obiWanKenobi.height}</h1>
        <h1>Eye Color: {this.state.obiWanKenobi.eye_color}</h1>
    </div>
  );
}
}

export default App;

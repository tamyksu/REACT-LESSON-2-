import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:{ nameF:'Tamy!', lastName: 'Fink'},
      company:'c',
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi {this.state.name.nameF} {this.state.name.lastName}works in {this.state.company}
          </p>
         <button onClick={()=>{
          this.setState(

          () =>{
            return {name:{nameF:'Tcamy!', lastName: 'Ficccccccnk'}};
          },
          () => {//callback function, after the normal function finished
              console.log("ff")        
          }
          );
          console.log("d",this.state);
         }}> Change name</button>
        </header>
      </div>
    );

  }
  
}

export default App;

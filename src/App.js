import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
          monsters:[
            {
              name:"TON",
              id:1,
            },
            {
              name:"BON",
              id:2,
            },
            {
              name:"dvv",
              id:3,
            },
            {
              name:"dcc",
              id:4,
            },
          ]
    };

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => 
    console.log(res.json())
    .then((users)= console.log(users))
    );
  }
  render(){
    return (
      <div  className="App" >
        {
      this.state.monsters.map((monster)=>{
        return (
        <div key={monster.id}>
        <h1 align = 'left' >{monster.name}</h1>
       </div>
        );
      })
      };
      </div>
    );

  }
  
}

export default App;

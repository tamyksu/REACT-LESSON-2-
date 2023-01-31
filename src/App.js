

import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
          monsters:[
          /*  {
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
            },*/
          ],
          searchString: "",
    };

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      this.setState(() => {
        return {monsters:users};//new object to state- update
      },
     ()=>{
       console.log(this.state)//state status- display
     });
    });
  }
  onSearchChange = (event) =>{
    const searchString = event.target.value.toLocaleLowerCase()
    this.setState( ()=>{
      return { searchString: searchString};
     })
  }
  render(){
    const {monsters,searchString} = this.state;//it's allow us to write without this.state
    const filterList = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchString);
   });
    return (
      <div  className="App" >
      <input className='search-box'
       type="search"
        placeholder='search name'
        onChange={this.onSearchChange}/>
        {
        filterList.map((monster)=>{
        return (
        <div key={monster.id}>
        <h1 align = 'center' >{monster.name}</h1>
        <p> {monster.email}</p>
       </div>
        );
      })
      };
      </div>
    );

  }
  
}

export default App;

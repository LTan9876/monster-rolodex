import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }


  render() {
    let {searchField, monsters} = this.state
    let filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <input type='search'
        placeholder="search monster"
        onChange = {e => this.setState({searchField: e.target.value})}/>
        <CardList monsters = {filteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;

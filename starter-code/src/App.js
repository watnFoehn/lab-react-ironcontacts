import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts'

/* class Contacs extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

} */
var first5 = contacts.splice(0,5)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myContacts: first5
    }
    this.handleClick = this.handleClick.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }
  handleClick(){
    var randomIndex = Math.floor(Math.random()*(contacts.length-5)  + 5)
    const {myContacts} = this.state
    myContacts.push(contacts[randomIndex])
    this.setState(myContacts);
    // this.setState((preState) => {
    //    index: [...preState.index, randomIndex]
    // } )
    console.log(this.state)
  }

  sortByName(){
    const {myContacts} = this.state;
    myContacts.sort((a,b) => {
      b.name - a.name
    })
    this.setState({
      myContacts: myContacts.sort((a,b)=> {b.name - a.name})
    })
    // this.setState.myContacts.sort((a,b) => {b.name - a.name})
    console.log("sortbyname function clicked")
    console.log(myContacts)
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.handleClick}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button>Sort by popularity</button>

          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
                {(this.state.myContacts).map((i) => 
                    <tr key={i.name}>
                    <td><img src={i.pictureUrl} style={{width: 30}} /></td>
                    <td>{i.name}</td>
                    <td>{i.popularity}</td>
                  </tr>
                
                )}
                
                
            </tbody>
          </table>
          </div>
      </div>
    );
  }
}

export default App;
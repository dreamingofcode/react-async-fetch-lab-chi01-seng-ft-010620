// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(({ people }) => {
        console.log(people);
        this.setState({
          peopleInSpace: people
        });
      });
  }

  renderList = () => {
    return this.state.peopleInSpace.map(person => {
      return <li>{person.name}</li>;
    });
  };
  render() {
    return (
      <div>
        <h1>People In Space:</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
export default App
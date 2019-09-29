import React from 'react';
import CharlieBrown from './charlie_brown.svg'
import Snoopy from './snoopy.svg'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: CharlieBrown,
      imageName: 'Charlie Brown'
    }
  }
  changeImage = (state) => {
    const image = state.image === CharlieBrown ? Snoopy : CharlieBrown
    const imageName = state.image === CharlieBrown ? 'Snoopy' : 'Charlie Brown'
    this.setState({ image, imageName })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} alt={this.state.imageName} className="App-logo" onClick={() => this.changeImage(this.state)} />
          <p>
            Hello World!
          </p>
        </header>
      </div>
    );
  }
}

export default App;

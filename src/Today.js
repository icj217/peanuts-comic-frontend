import React from 'react';
import './App.css';

const Comic = (props) => {
    return (<div></div>)
}

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: null
    }
  }

  async componentDidMount() {
    const today = await this.getToday()
    this.setState({ comic: today })
  }

  async getToday() {
    const data = await fetch('from:api')
    return data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            {
                this.state.comic
                ? <img src={this.state.comic.url} className="App-logo" />
                : null
            }
        </header>
      </div>
    );
  }
}

export default App;

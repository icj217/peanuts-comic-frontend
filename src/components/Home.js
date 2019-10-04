import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import CharlieBrown from '../assets/charlie_brown.svg'
import Snoopy from '../assets/snoopy.svg'
import '../style/Home.css'

class Home extends React.Component {
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
      <div className="Home-body">
        <Row>
          <Col>
            <img src={this.state.image} alt={this.state.imageName} className="App-logo" onClick={() => this.changeImage(this.state)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Peanuts comic strips delivered straight to your inbox, daily!</p>
            <Button disabled>Email Delivery Coming Soon!</Button>
          </Col>
        </Row>
      </div>)
    }
  }
export default Home

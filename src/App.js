import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
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
      <div>
        <Container className="App">
          <Row className="App-header">
            <Col>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                  <img
                    src={CharlieBrown}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Peanuts Today"
                  />
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <div className="App-body">
            <Row>
              <Col>
                <img src={this.state.image} alt={this.state.imageName} className="App-logo" onClick={() => this.changeImage(this.state)} />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Peanuts comic strips delivered straight to your inbox, daily!</p>
                <Button>Sign Up</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
        
    );
  }
}

export default App;

import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import API from '@aws-amplify/api'
import awsConfig from '../aws-config'
import { Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Home from './Home'
import Today from './Today'
import '../style/App.css';

API.configure(awsConfig)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Container className="App">
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                  <Navbar.Brand>Peanuts Today</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <LinkContainer to="/today">
                      <Nav.Link>Today's Comic</Nav.Link>
                    </LinkContainer>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" disabled={true} placeholder="Search coming soon!" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          <div className="App-body">
            <Switch>
              <Route path="/today">
                <Today />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

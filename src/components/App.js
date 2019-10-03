import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import API from '@aws-amplify/api'
import awsConfig from '../aws-config'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
        <Router>
          <Container className="App">
            <Row >
              <Col>
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="/">Peanuts Today</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/today">Today's Comic</Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" disabled={true} placeholder="Search coming soon!" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
            <Switch>
              <Route path="/today">
                <Today />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

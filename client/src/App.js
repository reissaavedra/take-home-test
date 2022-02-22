
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        fetchData: []
      }
  }

  componentDidMount(){
    axios.get("")
        .then((response) => {
          this.setState({
            fetchData: response.data
          })
        })
  }

  submit = () => {
    axios.post('', this.state)
        .then(() => {alert('success')})
    console.log(this.state)
    document.location.reload();
  }

  render(){
    let card = this.state.fetchData.map((val, key) => {
      return(
        <React.Fragment>
          <Card style={{width: '18rem'}} className='m-2'>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </React.Fragment>
      )
    })

    return(
      <div className='App'>
        <h1>Dockerized App</h1>
        <div className='form'>
        </div>
        <Button className='my-2' variant='primary' onClick={this.submit}>
          Submit
        </Button>
        <Container>
          <Row>
            {card}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;


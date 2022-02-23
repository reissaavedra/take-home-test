
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row } from 'react-bootstrap';
import HandleApiUser from './HandleFetchUser';
import HandleApiRepo from './HandleFetchRepo';
import HandleApiCommits from './HandleFetchCommits';
import CardCommit from './Components/CardCommit';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        fetchDataUser: {},
        fetchDataCommits: [],
        fetchDataRepo: {},
      }
  }

  componentDidMount(){
    HandleApiUser
      .then((result)=>{
        this.setState({
          fetchDataUser : result
        });
        console.log(result);
      })

    HandleApiRepo
      .then((result)=>{
        this.setState({
          fetchDataRepo : result
        });
        console.log(result);
      })

    HandleApiCommits
      .then((result)=>{
        this.setState({
          fetchDataCommits : result
        });
        console.log(result);
      })
  }

  refresh = () => {
    HandleApiCommits
      .then((result)=>{
        this.setState({
          fetchDataCommits : result
        });
        console.log(result);
      });
      this.render();
  }

  render(){
    let card = this.state.fetchDataCommits.map((val, key) => {
      return (
          <React.Fragment>
              <CardCommit data={val}></CardCommit>
          </React.Fragment>
      )
  })
    return(
      <div className='App'>
        <img src={this.state.fetchDataUser.avatar_url} className='avatar'></img>
        <h1>{this.state.fetchDataRepo.full_name}</h1>
        <div className='form'>
        </div>
        <Button className='my-2' variant='primary' onClick={this.refresh}>
          Refresh
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


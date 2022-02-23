
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

import './App.css';
import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
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
      })

    HandleApiRepo
      .then((result)=>{
        this.setState({
          fetchDataRepo : result
        });
      })

    HandleApiCommits
      .then((result)=>{
        this.setState({
          fetchDataCommits : result
        });
      })
  }

  refresh = () => {
    HandleApiCommits
      .then((result)=>{
        // this.setState({
        //   fetchDataCommits: result
        // });
        console.log(result)
      })
      
  }

  render(){
    let card = this.state.fetchDataCommits.map((val, key) => {
      return (
          <React.Fragment>
              <CardCommit data={val} key={val.sha}></CardCommit>
          </React.Fragment>
      )
    })
    return(
      <div className='App'>
        <img src={this.state.fetchDataUser.avatar_url} className='avatar'></img>
        <h1>{this.state.fetchDataRepo.full_name}</h1>
        <div className='info_user'>
          <h4>{this.state.fetchDataUser.name}</h4>
          <h4>{this.state.fetchDataUser.location}</h4>
          {this.state.fetchDataUser.bio}
        </div><br></br>
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



/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

import './App.css';
import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import HandleApiUser from './HandleFetchUser';
import HandleApiRepo from './HandleFetchRepo';
import HandleApiCommits from './HandleFetchCommits';
import CardCommit from './Components/CardCommit';
import InfoUser from './Components/InfoUser';
import axiosInstance from './Components/AxiosInstance';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        fetchDataUser: {},
        fetchDataCommits: [],
        fetchDataRepo: {},
      }
  }

  setFetchDataCommits = () => {
    axiosInstance.get(`/commits`)
    .then(result => {
      this.setState({fetchDataCommits: result.data});
      this.forceUpdate();
    });
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

  render(){
    let card = this.state.fetchDataCommits.reverse().map((val, key) => {
      return (
          <React.Fragment>
              <CardCommit data={val} keyValue={key}></CardCommit>
          </React.Fragment>
      )
    })
    return(
      <div className='App'>
        <h1>{this.state.fetchDataRepo.full_name}</h1>
        <InfoUser dataUser={this.state.fetchDataUser}>
        </InfoUser>
        <br></br>
        <Button className='my-2' variant='primary' onClick={this.setFetchDataCommits}>
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


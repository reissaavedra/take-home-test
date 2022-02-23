import { Component } from "react";
import { Card } from 'react-bootstrap';
export default class CardCommit extends Component{
    render(){
        return <Card style={{ width: '18rem' }} className='m-2'>
                  <Card.Body>
                      <Card.Title>{this.props.val.commit.message}</Card.Title>
                      <Card.Text>
                          {this.props.val.sha}
                      </Card.Text>
                  </Card.Body>
              </Card>
    }
}
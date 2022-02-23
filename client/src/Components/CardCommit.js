import { Component } from "react";
import { Card } from 'react-bootstrap';
export default class CardCommit extends Component{
    changeBackground(e) {
        e.target.style.background = 'gray';
    }

    changeBackgroundWhite(e) {
        e.target.style.background = 'white';
    }

    handleClick(link, e) {
        window.location.href = link
    }

    render(){
        return <Card style={{ width: '18rem'}} className='m-2' >
                    <Card.Body 
                        style={{cursor:'pointer'}} 
                        onClick={(e) => this.handleClick(this.props.data.html_url, e)}
                    >
                        <Card.Title >
                            {this.props.keyValue + 1} - {this.props.data.commit.message}
                        </Card.Title>
                        <Card.Text 
                            onMouseOver={this.changeBackground}
                            onMouseOut={this.changeBackgroundWhite}>{this.props.data.sha}
                        </Card.Text>
                        <h6>Date: {this.props.data.commit.committer.date}</h6>
                        <h6>Author: {this.props.data.commit.author.name}</h6>
                  </Card.Body>
              </Card>
    }
}
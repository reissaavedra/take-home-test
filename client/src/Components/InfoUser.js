import { Component } from "react";
export default class InfoUser extends Component{
    render(){
        return <div className='info_user' >
        <img src={this.props.dataUser.avatar_url} className='avatar' alt={this.props.dataUser.login}></img>
          <h4>{this.props.dataUser.name}</h4>
          <h4>{this.props.dataUser.location}</h4>
          {this.props.dataUser.bio}
        </div>
    }
}
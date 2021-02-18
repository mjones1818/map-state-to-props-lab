import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user,index) => <li key={index}>{user.username}</li>)}
          Count of users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {

  return {users: state.users, userCount: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)

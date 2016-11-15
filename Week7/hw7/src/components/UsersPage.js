import React, { Component } from 'react';


class UsersPage extends Component {
  state = {
    users: 0
  }
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ users: json });
      })
  }

  renderUsers() {
    const Users = this.state.users.users;
    // console.log(Users);
    if (Users !== undefined) {
      return (
        <div>
          { Users.map((user, i) => {
              return <li key={i + 1}><a href={"#/users/" + (i + 1)}>user {i + 1}</a></li>   
            })
          }
        </div>
      );
    } 
  }

  render() {
    return (
      <div>Users
        { this.renderUsers() }
      </div>
    );
  }
}

export default UsersPage;

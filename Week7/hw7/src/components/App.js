import React, { Component } from 'react';

import HomePage from './HomePage';
import UsersPage from './UsersPage';
import SingleUserPage from './SingleUserPage';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      // console.log(window.location.hash.substr(1));
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/users') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }

    return <HomePage />;
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/users">Users</a></li>
        </ul>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;

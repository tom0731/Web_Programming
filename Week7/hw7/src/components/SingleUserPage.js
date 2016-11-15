import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
  	userData: 0
  }

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
  	const { id } = this.props;
  	fetch(`/api/users/${id}`)
  		.then(response => {
  			return response.json();
  		})
  		.then(json => {
  			this.setState({ userData: json });
  		});
  }

  render() {
  	const { avator, name, age } = this.state.userData;
    return (
    	<div>User {this.props.id}
    		<div>Avator: { avator }</div>
    		<div>Name: { name }</div>
    		<div>Age: { age }</div>
    	</div>
    );
  }
}

export default SingleUserPage;

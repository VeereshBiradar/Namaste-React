import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: { name: '', location: '', avatar_url: '' }
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/VeereshBiradar');
    const res = await data.json();

    this.setState({ userData: res })
  }

  render() {
    const { name, location, avatar_url } = this.state.userData;
    
    return (
      <div className="user-card">
        <img src={avatar_url} alt="veeresh_biradar" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;

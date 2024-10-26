import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variable
    this.state = {
      count: 0,
      count2: 1
    };
  }

  render() {
    const { name, location, image} = this.props;
    // const { count, count2 } = this.state;

    return (
      <div className="user-card">
        {/* <h1>Count(Class): {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Increment
        </button> */}
        
        <img src = {image} alt="profile-pic" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h2>Contact: @abhiRai24</h2>
      </div>
    );
  }
}

export default UserClass;

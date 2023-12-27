import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
    }

    render() {
        return(
            <div className="user-card">
            <h2>Name : {this.name} </h2>
            <h3>Location : Pune</h3>
            <h4>Contact Me: @shubh_posts</h4>
        </div>
        )
    }
}

export default UserClass;
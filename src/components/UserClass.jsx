import React from "react";

class UserClass extends React.Component {
    constructor(props) { 
        super(props);
        this.name = this.props.name;
        this.state = {
            userInfo: {
                name : "Dummy",
                avatar_url: ""
            }
        }
    }

    async componentDidMount(){
        const res = await fetch("https://api.github.com/users/shubhraj");
        const data = await res.json();
        console.log(data);
        this.setState({
            userInfo: data
        });
        
    }

    render() {
        const {name, avatar_url } = this.state.userInfo;
        return (
        <div className="user-card"> 
             <img src={avatar_url}/>        
            <h2>Name : {name} </h2>
            <h3>Location : Pune</h3>
            <h4>Contact Me: @shubh_posts</h4>
        </div>
        )
    }
}

export default UserClass;
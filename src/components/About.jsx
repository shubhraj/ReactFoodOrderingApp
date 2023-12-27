import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div>This is about Page</div>
            <User name="Shubham ( Functional )" />
            <UserClass name="Shubham ( Class )" />
        </div>
    )
}

export default About;
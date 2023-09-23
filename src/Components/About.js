import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
import UserTime from "./UserTimer";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log('Parent Constructor');
    }

    componentDidMount() {
        // console.log("Parent Component did mount");
    }

    render() {
        // console.log('Parent Render');

        return (
            <div>
                <h1>About Page</h1>
                {/* <UserClass name={"Rajath"} twitterHandle={"@rajathhr"}/> */}
                <UserTime />
            </div>
        )
    }
}
// const About = () => {
//     return (
        // <div>
        //     <h1>About Page</h1>
        //     <UserClass name={"Rajath"} twitterHandle={"@rajathhr"}/>
        // </div>
//     )
// }

export default About;
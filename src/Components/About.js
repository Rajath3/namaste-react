import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);

        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log("Parent Component did mount");
    }

    render() {
        console.log('Parent Render');

        return (
            <div>
                <h1>About Page</h1>
                <UserClass name={"First"} twitterHandle={"@rajathhr"}/>
                <UserClass name={"Second"} twitterHandle={"@rj"}/>
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
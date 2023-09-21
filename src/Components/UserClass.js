
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                login: "Something",
                type: "Some type",
                avatar_url: "http://dummyimg.com"
            }
        }

        // console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Rajath3");

        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    render() {
        // console.log(this.props.name + "Child Render");

        const {login, type, avatar_url} = this.state.userInfo;

        return (
            <div>
                <img src={avatar_url} />
                <h2>Name: {login}</h2>
                <h3>Location: {type}</h3>
            </div>
        )
    }
}


export default UserClass;
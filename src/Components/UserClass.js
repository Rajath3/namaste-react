
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        console.log(this.props.name + " Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child Component did mount");
    }

    render() {
        console.log(this.props.name + "Child Render");

        const {name, twitterHandle} = this.props;
        const { count } = this.state;

        const updateCount = () => {
            this.setState({count: count + 1})
        }

        return (
            <div>
                <h2>Name: {name}</h2>
                <h3>Twitter handle: {twitterHandle}</h3>
                <button onClick={() => updateCount()}>Clicked {count} times</button>
            </div>
        )
    }
}


export default UserClass;
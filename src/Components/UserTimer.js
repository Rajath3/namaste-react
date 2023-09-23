import { Component } from "react";

class UserTime extends Component {

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('Do something..');
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Update called');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    render() {
        return (
            <div>
                <h1>Clearinterval checker</h1>
            </div>
        )
    }

}

export default UserTime;
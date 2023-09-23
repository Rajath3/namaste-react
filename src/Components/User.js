import {useEffect} from 'react'

const User = () => {

    useEffect(()=> {
        const timer = setInterval(()=>{
            console.log('Do something');
        }, 1000);

        return () => {
            console.log('This is cleanup for useEffect');
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h1>User Component</h1>
        </div>
    )
}

export default User;
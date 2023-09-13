import { useRouteError } from "react-router-dom";

const Error = () => {
    // Convention is that anything starting with use is Hook.
    const err = useRouteError()
    return (
        <div>
            <h1>Page Not Found!</h1>
            <h2>{err.status}</h2>
        </div>
    )
}

export default Error;
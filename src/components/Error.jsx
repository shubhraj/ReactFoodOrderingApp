import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>opps </h1>
            <h2>something went wrong , 404 : not found...</h2>
            <h3>status : {err.status}</h3>
            <h4>{err.data}</h4>
        </div>
    )
}

export default Error;
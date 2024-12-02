import {useSelector} from "react-redux";
import {serverError} from "../../Redux/selectors/Selectors";

const NotFound404 = () => {
    const value = useSelector(serverError)


    return (
        <div>
            <b>Not found 404</b>
            <b>{value}</b>
        </div>
    )
}

export default NotFound404
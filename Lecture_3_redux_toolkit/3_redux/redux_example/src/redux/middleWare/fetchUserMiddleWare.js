import { userActions } from "../slice/UserSlice";

const fetchUserMideleWare = (params) => {
    return async function (dispatch) {
        try {
            dispatch(userActions.onPending());
            //fetch user data from API and set it to the state
            const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`);
            const userData = await userResp.json();
            dispatch(userActions.onFulfilled(userData));
        }
        catch (err) {
            dispatch(userActions.onRejected(err));
        }
    }
}
export default fetchUserMideleWare;
import { userActions } from "../slice/UserSlice";

export default fetchUserMideleWare = () => {
    return async function (dispatch) {
        try {
            dispatch(userActions.onPending());
            //fetch user data from API and set it to the state
            const userResp = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const userData = await userResp.json();
            dispatch(userActions.onFulfilled(userData));
        }
        catch (err) {
            dispatch(userActions.onRejected(err));
        }
    }
}
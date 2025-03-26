import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import fetchUserMiddleWare from '../redux/middleWare/fetchUserMiddleWare';

function UserComponent() {
    const {user, loading, error}=useSelector(store =>store.userSlice);
    const dispatch=useDispatch();
    
    useEffect(() => {
        dispatch(fetchUserMiddleWare());
    }, [])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
        }}>
            <div>
                <h4>Name: {user.name}</h4>
                <h4>Phone: {user.phone}</h4>
            </div>
        </div>
    )
}

export default UserComponent

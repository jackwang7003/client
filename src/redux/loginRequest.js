
import { setToken, setAuth } from './authReducer';

export const loginRequest = async (dispatch, username, password) => {
      try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
        const data = await res.json();
        const token = data.token;
        dispatch(setToken({token}));
        dispatch(setAuth(true));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
/*
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        }).catch((err) => {
            console.log(err);
            return false;
        });

        if (res.status === 200) {
            const data = await res.json();
            const token = data.token;
            dispatch(setCredentials({token: token}));
            return true;
        } else {
            return false;
        }

        
    } ;
*/

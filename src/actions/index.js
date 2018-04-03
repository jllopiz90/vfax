import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from './types';
import {
    CLIENT_ID,
    CLIENT_SECRET,
    SCOPE,
    GRANT_TYPE,
    AUTH_URL
} from './oauthConfig';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const logoutUser = () => {
    return{
        type: LOGOUT_USER
    };
};

export const loginUser = ({email, password})=>{
    return (dispatch) =>{
        dispatch({type: LOGIN_USER});
        fetch(AUTH_URL, {
            method: "POST",             
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username        : email,
                password        : password,
                client_id       : CLIENT_ID,
                client_secret   : CLIENT_SECRET,
                grant_type      : GRANT_TYPE,
                scope           : SCOPE,
              }),
          }).then(user=>{
            dispatch({type: LOGIN_USER_SUCCESS, payload:user})
          }).catch(() =>loginUserFail(dispatch));
        
    };
};

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

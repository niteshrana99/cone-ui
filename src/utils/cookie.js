import cookie from 'js-cookie';

//set cookie
export const setCookie = (key, value) => {
    if(process.browser) {
        cookie.set(key, value, {
            expires:1
        });
    }
};

//remove cookie
export const removeCookie = (key) => {
    if(process.browser) {
        cookie.remove(key);
    }
};


//get cookie
export const getCookie = key => {
    if(process.browser) {
        return cookie.get(key);
    }
};


//set in localstorage
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


//remove in localstorage
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const authenticate = (response, next) => {
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
}

//access user info
export const isAuth = () => {
    const cookieToken = getCookie('token');
    // if(cookieToken)
}
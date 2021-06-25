import Cookies from "js-cookie";

const getCookieData = (name) => {
    return Cookies.get(name);
};

const setCookieData = (name, value, remember = true, time = 365) => {
    Cookies.set(name, value, { expires: remember ? time : null });
};

const removeCookieData = (name) => {
    Cookies.remove(name);
};

export { getCookieData, setCookieData, removeCookieData };

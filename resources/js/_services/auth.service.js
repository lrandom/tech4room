import axios from 'axios';

const AUTH_URL = 'http://tech4room.test:8080/api/auth/';

export const AuthService = {
    login,
    logout,
    register,
};

function login(user) {
    return axios.post(
        AUTH_URL + 'login',
        {
            email: user.email,
            password: user.password
        }
    )
}

function logout() {
    return axios.get(
        AUTH_URL+'logout'
    )
}

function register(user) {
    return axios.post(
        AUTH_URL + 'register',
        {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        }
    )
}

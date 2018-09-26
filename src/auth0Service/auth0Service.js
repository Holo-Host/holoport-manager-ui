import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {AUTH_CONFIG} from './auth0ServiceConfig';

class auth0Service {
    sdk = {auth0Manage: null};

    lock = new Auth0Lock(
        AUTH_CONFIG.clientId,
        AUTH_CONFIG.domain,
        {
            autoclose        : true,
            socialButtonStyle: "big",
            auth             : {
                // redirect: false,
                redirectUrl : AUTH_CONFIG.callbackUrl,
                responseType: 'token id_token',
                audience    : `https://${AUTH_CONFIG.domain}/api/v2/`,
                params      : {
                    scope: 'openid profile email user_metadata app_metadata picture update:current_user_metadata create:current_user_metadata read:current_user'
                }
            }
        }
    );

    constructor()
    {
        if ( auth0Service.instance )
        {
            return auth0Service.instance;
        }
        this.handleAuthentication();
        auth0Service.instance = this;
    }

    login = () => {
        // Call the show method to display the widget.
        this.lock.show();
    };

    register = () => {
        this.lock.show({
            initialScreen: 'signUp'
        });
    };

    handleAuthentication = () => {
        // Add a callback for Lock's `authenticated` event
        this.lock.on('authenticated', this.setSession);
        // Add a callback for Lock's `authorization_error` event
        this.lock.on('authorization_error', (err) => {
            console.warn(`Error: ${err.error}. Check the console for further details.`);
        });
    };

    setSession = (authResult) => {

        if ( authResult && authResult.accessToken && authResult.idToken )
        {
            // Set the time that the access token will expire at
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
        }
    };

    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('auth0.ssodata');
    };

    isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        const isNotExpired = new Date().getTime() < expiresAt;
        if ( isNotExpired )
        {
            return true;
        }
        else
        {
            this.logout();
            return false;
        }
    };

    getUserData = () => {
        return new Promise((resolve, reject) => {

            const tokenData = this.getTokenData();
            const {sub: userId} = tokenData;

            const auth0UserUrl = 'https://' + AUTH_CONFIG.domain + '/api/v2/users/' + userId;

            axios.get(auth0UserUrl, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + this.getAccessToken()
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                // handle error
                console.warn('Cannot retrieve user data', error);
                reject(error);
            });
        });
    };

    updateUserData = (user_metadata) => {
        const tokenData = this.getTokenData();
        const {sub: userId} = tokenData;

        const auth0UserUrl = 'https://' + AUTH_CONFIG.domain + '/api/v2/users/' + userId;
        const dataObj = JSON.stringify({user_metadata});

        return axios.patch(auth0UserUrl, dataObj, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + this.getAccessToken()
            }
        });
    };

    getAccessToken = () => {
        return localStorage.getItem('access_token');
    };

    getIdToken = () => {
        return window.localStorage.getItem('id_token');
    };

    getTokenData = () => {
        const token = this.getIdToken();
        const decoded = jwtDecode(token);
        if ( !decoded )
        {
            return null;
        }
        return decoded;
    }
}

const instance = new auth0Service();

// prevents new properties from being added to the object
Object.freeze(instance);

export default instance;

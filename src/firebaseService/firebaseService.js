import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class firebaseService {

    constructor()
    {
        if ( firebaseService.instance )
        {
            return firebaseService.instance;
        }

        if ( !firebase.apps.length )
        {
            firebase.initializeApp(config);
            this.db = firebase.database();
            this.auth = firebase.auth();
        }

        firebaseService.instance = this;
    }

    getUserData = (userId) => {
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    resolve(user);
                });
        });
    };

    updateUserData = (user) => {
        return this.db.ref(`users/${user.uid}`)
            .set(user);
    }
}

const instance = new firebaseService();

// prevents new properties from being added to the object
Object.freeze(instance);

export default instance;

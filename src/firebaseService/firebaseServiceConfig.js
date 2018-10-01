const prodConfig = {
    apiKey           : "YOUR_API_KEY",
    authDomain       : "your-app.firebaseapp.com",
    databaseURL      : "https://your-app.firebaseio.com",
    projectId        : "your-app",
    storageBucket    : "your-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
    apiKey           : "AIzaSyBSrubIoxaqOqNa6YxBP9wqqoH0frrvIy0",
    authDomain       : "test-f4047.firebaseapp.com",
    databaseURL      : "https://test-f4047.firebaseio.com",
    projectId        : "test-f4047",
    storageBucket    : "test-f4047.appspot.com",
    messagingSenderId: "70443385694"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

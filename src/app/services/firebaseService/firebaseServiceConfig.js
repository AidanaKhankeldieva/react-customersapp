const prodConfig = {
    apiKey           : "AIzaSyCALvSnC-coFvcFDHupuNIWDImne83G37A",
    authDomain       : "seytech-98d48.firebaseapp.com",
    databaseURL      : "https://seytech-98d48.firebaseio.com",
    projectId        : "seytech-98d48",
    storageBucket    : "seytech-98d48.appspot.com",
    messagingSenderId: "755254748053"
};
const devConfig = {
    apiKey           : "AIzaSyCALvSnC-coFvcFDHupuNIWDImne83G37A",
    authDomain       : "seytech-98d48.firebaseapp.com",
    databaseURL      : "https://seytech-98d48.firebaseio.com",
    projectId        : "seytech-98d48",
    storageBucket    : "seytech-98d48.appspot.com",
    messagingSenderId: "755254748053"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

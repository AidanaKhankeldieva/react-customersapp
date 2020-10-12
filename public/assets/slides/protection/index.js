// if Not iframe go main page.
if(window.location.href === parent.location.href){
    window.location.href = "http://learn.seytech.co/";
  }
var firebaseConfig = {
  apiKey: "AIzaSyCALvSnC-coFvcFDHupuNIWDImne83G37A",
    authDomain: "seytech-98d48.firebaseapp.com",
    databaseURL: "https://seytech-98d48.firebaseio.com",
    projectId: "seytech-98d48",
    storageBucket: "seytech-98d48.appspot.com",
    messagingSenderId: "755254748053",
    appId: "1:755254748053:web:a37c2b7c0b053a9ccd8c9c"
};
// TODO: Replace the following with your app's Firebase project configuration
    // Initialize Firebase
  //the event occurred
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('seytech').style.display = 'none';
    document.getElementById('seytech-content').style.display = 'block';
  } else {
    window.location.href = "http://learn.seytech.co/";
  }
});

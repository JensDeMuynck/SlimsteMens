console.log('hello world')

var firebaseConfig = {
    apiKey: "AIzaSyCpGmPodLxoeFLh6Tz777qo_laPrlFjk68",
    authDomain: "slimste-mens-fb04e.firebaseapp.com",
    databaseURL: "https://slimste-mens-fb04e.firebaseio.com",
    projectId: "slimste-mens-fb04e",
    storageBucket: "slimste-mens-fb04e.appspot.com",
    messagingSenderId: "424441270671",
    appId: "1:424441270671:web:39e91bc6052ac1935abbfa",
    measurementId: "G-XDPXY9C1VN"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.database();
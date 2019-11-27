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

function points() {
  let points = db.ref('teams');
  points.on('vasue', function(snapshot) {
    document.getElementById('teamOne').innerHTML = snapshot.val().teamOne.name
    document.getElementById('teamOneScore').innerHTML = snapshot.val().teamOne.points
    document.getElementById('teamTwo').innerHTML = snapshot.val().teamTwo.name
    document.getElementById('teamTwoScore').innerHTML = snapshot.val().teamTwo.points
    document.getElementById('teamTree').innerHTML = snapshot.val().teamTree.name
    document.getElementById('teamTreeScore').innerHTML = snapshot.val().teamTree.points
  })
}

let db = firebase.database();

let state = db.ref('state');
state.on('value',function(snapshot) {
  let stateVal = snapshot.val()
  if(stateVal == true){
    points();
  } else {
    stateVal = snapshot.val()
  }
})

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

document.getElementById('names').addEventListener('click', function () {
  let teamOne = document.getElementById('teamOne').value;
  let teamTwo = document.getElementById('teamTwo').value;
  let teamTree = document.getElementById('teamTree').value;
  db.ref('teams/teamOne').set({
    name: teamOne,
    points: 60
  })
  db.ref('teams/teamTwo').set({
    name: teamTwo,
    points: 60
  })
  db.ref('teams/teamTree').set({
    name: teamTree,
    points: 60
  })
  db.ref('state').set(true)
  // console.log(document.getElementById('labelTeamOne').innerHTML)
  document.getElementById('labelTeamOne').innerHTML = teamOne;
  document.getElementById('labelTeamTwo').innerHTML = teamTwo;
  document.getElementById('labelTeamTree').innerHTML = teamTree;

  let points = db.ref('teams');
  points.on('value', function (snapshot) {
    document.getElementById('teamOneScore').innerHTML = snapshot.val().teamOne.points
    document.getElementById('teamTwoScore').innerHTML = snapshot.val().teamTwo.points
    document.getElementById('teamTreeScore').innerHTML = snapshot.val().teamTree.points
  })
  document.getElementById('nameBox').style.display = "none";
})

let number = 1;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function countDown(active){
  let state = active;
  number = number +1
  console.log(number)
  console.log(state)
}

let active = false;
document.getElementById('count-down').addEventListener('click', function () {
  active = !active;

  if (document.getElementById('one').checked == true) {
    countDown(active);
  }

})
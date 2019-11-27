function points() {
  let points = db.ref('teams');
  points.on('value', function (snapshot) {
    document.getElementById('teamOne').innerHTML = snapshot.val().teamOne.name
    document.getElementById('teamOneScore').innerHTML = snapshot.val().teamOne.points
    document.getElementById('teamTwo').innerHTML = snapshot.val().teamTwo.name
    document.getElementById('teamTwoScore').innerHTML = snapshot.val().teamTwo.points
    document.getElementById('teamTree').innerHTML = snapshot.val().teamTree.name
    document.getElementById('teamTreeScore').innerHTML = snapshot.val().teamTree.points
  })
}

let state = db.ref('state');
state.on('value', function (snapshot) {
  let stateVal = snapshot.val()
  if (stateVal == true) {
    points();
  } else {
    stateVal = snapshot.val()
  }
})
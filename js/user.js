function showRound(round) {
  console.log(round)
  if (round == 'one') {
    document.getElementById('content1').style.display = "flex"
  } else {
    document.getElementById('content1').style.display = "none"
  }

  if (round == "Two") {
    document.getElementById('content2').style.display = "flex"
  } else {
    document.getElementById('content2').style.display = "none"
  }
}

function points() {
  let points = db.ref('teams');
  points.on('value', function (snapshot) {
    let data = snapshot.val()

    // document.getElementById('teamTree').innerHTML = snapshot.val().teamTree.name
    // document.getElementById('teamTreeScore').innerHTML = snapshot.val().teamTree.points

    let teampoints = document.getElementsByClassName('points');

    for (let i = 0; i < teampoints.length; i++) {
      teampoints[i].innerHTML = `<div><h1 id="teamOne" class="team-name">${data.teamOne.name}</h1><p id="teamOneScore" class="team-score">${data.teamOne.points}</p></div><div><h1 id="teamTwo" class="team-name">${data.teamTwo.name}</h1><p id="teamTwoScore" class="team-score">${data.teamTwo.points}</p></div><div><h1 id="teamTree" class="team-name">${data.teamTree.name}</h1><p id="teamTreeScore" class="team-score">${data.teamTree.points}</p></div>`
    }
  })

  let round = db.ref('round');
  round.on('value', function (snapshot) {
    roundNumber = snapshot.val();
    showRound(roundNumber);

  })
  console.log(round)
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
function showRound(round) {
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

  if (round == "Three") {
    document.getElementById('content3').style.display = "flex"
  } else {
    document.getElementById('content3').style.display = "none"
  }

  if (round == "Four") {
    document.getElementById('content4').style.display = "flex"
  } else {
    document.getElementById('content4').style.display = "none"
  }

  if (round == "Five") {
    document.getElementById('content5').style.display = "flex"
  } else {
    document.getElementById('content5').style.display = "none"
  }
}

function points() {
  let points = db.ref('teams');
  points.on('value', function (snapshot) {
    let data = snapshot.val()
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
}

function assets() {
  let asset = db.ref('assetsurlVideo');
  asset.on('value', function (snapshot) {
    let link = snapshot.val()
    console.log(link)
    if (link != 'false') {
      document.getElementById('videoplay').innerHTML = `<video autoplay>
    <source src="${link}" type="video/mp4">
    <source src="bg.png" type="video/ogg">
  </video>`
  link = snapshot.val()
    } else {
      document.getElementById('videoplay').innerHTML = ``
      link = snapshot.val()
    }

  })
}

function assetImage(){
  let assetimage = db.ref('assetsurlPictures');
  assetimage.on('value', function (snapshot) {
    let link = snapshot.val()
    console.log(link)
    console.log(link != 'false')
    if (link != 'false') {
      document.getElementById('fotoronde').innerHTML = `<img src="${link}">`
      link = snapshot.val()
  link = snapshot.val()
    } else {
      document.getElementById('fotoronde').innerHTML = ``
      link = snapshot.val()
    }

  })
}

function answers() {
  let answerOne = db.ref('anwser/BtnOne');
  console.log(answerOne)
  answerOne.on('value', function (snapshot) {
    console.log(snapshot.val())
    document.getElementById('a1').innerHTML = `${snapshot.val()}`
  })
  let answerTwo = db.ref('anwser/BtnTwo');
  answerTwo.on('value', function (snapshot) {
    document.getElementById('a2').innerHTML = `${snapshot.val()}`
  })
  let answerThree = db.ref('anwser/BtnThree');
  answerThree.on('value', function (snapshot) {
    document.getElementById('a3').innerHTML = `${snapshot.val()}`
  })
  let answerFour = db.ref('anwser/BtnFour');
  answerFour.on('value', function (snapshot) {
    document.getElementById('a4').innerHTML = `${snapshot.val()}`
  })
  let answerFive = db.ref('anwser/BtnFive');
  answerFive.on('value', function (snapshot) {
    document.getElementById('a5').innerHTML = `${snapshot.val()}`
  })
  // answers()

}

let state = db.ref('state');
state.on('value', function (snapshot) {
  let stateVal = snapshot.val()
  if (stateVal == true) {
    points();
    assets();
    assetImage();
    answers()
  } else {
    stateVal = snapshot.val()
  }
})
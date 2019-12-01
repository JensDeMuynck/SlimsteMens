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
    document.getElementById('labelTeamOne').innerHTML = teamOne;
    document.getElementById('labelTeamTwo').innerHTML = teamTwo;
    document.getElementById('labelTeamTree').innerHTML = teamTree;

    let points = db.ref('teams');
    points.on('value', function (snapshot) {
        console.log(document.getElementById('teamOneScore'));
        document.getElementById('teamOneScore').innerHTML = snapshot.val().teamOne.points
        document.getElementById('teamTwoScore').innerHTML = snapshot.val().teamTwo.points
        document.getElementById('teamTreeScore').innerHTML = snapshot.val().teamTree.points
    })
    document.getElementById('nameBox').style.display = "none";
})
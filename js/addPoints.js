function countPlus(teamnumber, points) {
    let point;
    let getPoints = db.ref('teams/' + teamnumber + '/points');
    getPoints.on('value', function (snapshot) {
        point = snapshot.val()
    })
    point = point + points;
    db.ref('teams/' + teamnumber + '/points').set(point)
}

document.getElementById('BtnOne').addEventListener('click', function () {
    if (document.getElementById('one').checked == true) {
        countPlus('teamOne', 10);
    }
    if (document.getElementById('two').checked == true) {
        countPlus('teamTwo', 10);
    }
    if (document.getElementById('tree').checked == true) {
        countPlus('teamTree', 10);
    }
})

document.getElementById('BtnTwo').addEventListener('click', function () {
    if (document.getElementById('one').checked == true) {
        countPlus('teamOne', 20);
    }
    if (document.getElementById('two').checked == true) {
        countPlus('teamTwo', 20);
    }
    if (document.getElementById('tree').checked == true) {
        countPlus('teamTree', 20);
    }
})

document.getElementById('BtnTree').addEventListener('click', function () {
    if (document.getElementById('one').checked == true) {
        countPlus('teamOne', 30);
    }
    if (document.getElementById('two').checked == true) {
        countPlus('teamTwo', 30);
    }
    if (document.getElementById('tree').checked == true) {
        countPlus('teamTree', 30);
    }
})

document.getElementById('BtnFour').addEventListener('click', function () {
    if (document.getElementById('one').checked == true) {
        countPlus('teamOne', 40);
    }
    if (document.getElementById('two').checked == true) {
        countPlus('teamTwo', 40);
    }
    if (document.getElementById('tree').checked == true) {
        countPlus('teamTree', 40);
    }
})

document.getElementById('BtnFive').addEventListener('click', function () {
    if (document.getElementById('one').checked == true) {
        countPlus('teamOne', 50);
    }
    if (document.getElementById('two').checked == true) {
        countPlus('teamTwo', 50);
    }
    if (document.getElementById('tree').checked == true) {
        countPlus('teamTree', 50);
    }
})
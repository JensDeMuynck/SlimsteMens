let btn = document.getElementById('count-down');
let active = false;

var counter = 60;
let interval = null;

function countDown(team) {
  let points = db.ref('teams/' + team + '/points');
  points.on('value', function (snapshot) {
    counter = snapshot.val();
  })
  console.log(team);
  if (active) {
    console.log('starting...');
    interval = setInterval(() => {
      counter--;
      db.ref('teams/' + team + '/points').set(counter)
      console.log(counter);
    }, 1000);
  } else {
    clearInterval(interval);
    console.log('...stopped');
  }
}

btn.addEventListener('click', function () {
  active = !active;

  if (document.getElementById('one').checked == true) {
    countDown('teamOne');
  }
  if (document.getElementById('two').checked == true) {
    countDown('teamTwo');
  }
  if (document.getElementById('tree').checked == true) {
    countDown('teamTree');
  }

})
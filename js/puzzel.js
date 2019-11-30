let puzzelBtn = document.getElementsByClassName("puzzelBtn");
let puzzelround = document.getElementsByClassName('puzzel');

function color(mix, color){
  let whatMix = document.getElementsByClassName(mix);
  for(let i=0; i<whatMix.length; i++){
    whatMix[i].style.backgroundColor = color;
  }
}

function select(e) {
  db.ref('puzzel/found').set(e.target.innerHTML)
}

function selectpuzzel(e){
  db.ref('puzzel/puzzel').set(e.target.innerHTML)
}
for (let i = 0; i < puzzelBtn.length; i++) {
  puzzelBtn[i].addEventListener('click', select)
}

for (let i = 0; i < puzzelround.length; i++) {
  puzzelround[i].addEventListener('click', selectpuzzel)
}

let puzzel = db.ref('puzzel/puzzel');
let namePuzzel = db.ref('puzzel/found');
let antwoord1 = document.getElementById('antwoord1')
let antwoord2 = document.getElementById('antwoord2')
let antwoord3 = document.getElementById('antwoord3')

puzzel.on('value', function (snapshot) {
  let sortPuzzel = snapshot.val()
  color('puzzelbox', "transparent")
  antwoord1.innerHTML = ""
  antwoord2.innerHTML = ""
  antwoord3.innerHTML = ""

  for(let i = 0; i < document.getElementsByClassName('puzzels').length; i++){
    document.getElementsByClassName('puzzels')[i].style.display = "none"
  }
  document.getElementById(sortPuzzel).style.display = "block"
})



namePuzzel.on('value', function (snapshot) {
  let nameFound = snapshot.val()
  if(nameFound == 'kerstbal' || nameFound =='openhaard' || nameFound=='ster'){
    antwoord1.innerHTML=nameFound;
    color('puzzelmix1', 'green');
  }
  if(nameFound == 'rendier' || nameFound =='winter' || nameFound=='engel'){
    antwoord2.innerHTML=nameFound;
    color('puzzelmix2', 'blue');
  }
  if(nameFound == 'kerstman' || nameFound =='vuurwerk' || nameFound=='kerststal'){
    antwoord3.innerHTML=nameFound;
    color('puzzelmix3', 'yellow');
  }
})
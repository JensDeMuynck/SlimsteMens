let answerBtn1 = document.getElementsByClassName('answerBtn1')
let answerBtn2 = document.getElementsByClassName('answerBtn2')
let answerBtn3 = document.getElementsByClassName('answerBtn3')
let answerBtn4 = document.getElementsByClassName('answerBtn4')
let answerBtn5 = document.getElementsByClassName('answerBtn5')
let deleteawns = document.getElementsByClassName('assetsButtons');

function selectOne(e){
  db.ref('anwser/BtnOne').set(e.target.innerHTML)
}

for(let i = 0; i < answerBtn1.length ; i++) {
  answerBtn1[i].addEventListener('click', selectOne)
}

function selectTwo(e){
  db.ref('anwser/BtnTwo').set(e.target.innerHTML)
}

for(let i = 0; i < answerBtn2.length ; i++) {
  answerBtn2[i].addEventListener('click', selectTwo)
}

function selectThree(e){
  db.ref('anwser/BtnThree').set(e.target.innerHTML)
}

for(let i = 0; i < answerBtn3.length ; i++) {
  answerBtn3[i].addEventListener('click', selectThree)
}

function selectFour(e){
  db.ref('anwser/BtnFour').set(e.target.innerHTML)
}

for(let i = 0; i < answerBtn4.length ; i++) {
  answerBtn4[i].addEventListener('click', selectFour)
}

function selectFive(e){
  db.ref('anwser/BtnFive').set(e.target.innerHTML)
}

for(let i = 0; i < answerBtn5.length ; i++) {
  answerBtn5[i].addEventListener('click', selectFive)
}

function deleteawnsfunction(){
  db.ref('anwser/BtnOne').set("")
  db.ref('anwser/BtnTwo').set("")
  db.ref('anwser/BtnThree').set("")
  db.ref('anwser/BtnFour').set("")
  db.ref('anwser/BtnFive').set("")
}

for(let i = 0; i < deleteawns.length ; i++) {
  deleteawns[i].addEventListener('click', deleteawnsfunction)
}
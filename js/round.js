function addRound(round){
  db.ref('round').set(round)
  if(round == 'one') {
    document.getElementById('BtnOne').style.display = "block";
    document.getElementById('roundOneQuiz').style.display = "block";
  }else {
    document.getElementById('BtnOne').style.display = "none";
    document.getElementById('roundOneQuiz').style.display = "none";
  }
  if (round == 'Two') {
    document.getElementById('BtnTwo').style.display = "block";
    document.getElementById('roundTwoAssets').style.display = "block";
  } else {
    document.getElementById('BtnTwo').style.display = "none";
    document.getElementById('roundTwoAssets').style.display = "none";
  }
  if(round == 'Three') {
    document.getElementById('BtnTree').style.display = "block";
    document.getElementById('roundThreePuzzels').style.display = "block";
  }else {
    document.getElementById('BtnTree').style.display = "none";
    document.getElementById('roundThreePuzzels').style.display = "none";
  }
  if(round == 'Four') {
    document.getElementById('BtnOne').style.display = "block";
    document.getElementById('roundFourImages').style.display = "block";
  }else {
    document.getElementById('BtnOne').style.display = "none";
    document.getElementById('roundFourImages').style.display = "none";
  }
  if(round == 'Five') {
    document.getElementById('BtnOne').style.display = "block";
    document.getElementById('BtnTwo').style.display = "block";
    document.getElementById('BtnTree').style.display = "block";
    document.getElementById('BtnFour').style.display = "block";
    document.getElementById('BtnFive').style.display = "block";
  }else {
    document.getElementById('BtnOne').style.display = "none";
    document.getElementById('BtnTwo').style.display = "none";
    document.getElementById('BtnTree').style.display = "none";
    document.getElementById('BtnFour').style.display = "none";
    document.getElementById('BtnFive').style.display = "none";
  }
 
};

document.getElementById('RondeOne').addEventListener('click',function(){
  addRound('one');
})
document.getElementById('RondeTwo').addEventListener('click',function(){
  addRound('Two');
})
document.getElementById('RondeThree').addEventListener('click',function(){
  addRound('Three');
})
document.getElementById('RondeFour').addEventListener('click',function(){
  addRound('Four');
})
document.getElementById('RondeFive').addEventListener('click',function(){
  addRound('Five');
})
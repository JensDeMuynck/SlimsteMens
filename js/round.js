function addRound(round){
  db.ref('round').set(round)
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
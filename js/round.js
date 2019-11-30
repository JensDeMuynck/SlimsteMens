function addRound(round){
  db.ref('round').set(round)
  if(round == 'one') {
    document.getElementById('BtnOne').style.display = "block";
  }else {
    document.getElementById('BtnOne').style.display = "none";
  }
  
  
  if (round == 'Two') {
    document.getElementById('Btn').style.display = "block";
    
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
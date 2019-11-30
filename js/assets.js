let assets = document.getElementsByClassName('assetsButtons');

function select(e) {
  db.ref('assetsurlVideo').set(e.target.innerHTML)
}

for(let i = 0; i < assets.length ; i++) {
  assets[i].addEventListener('click', select)
}

let assetsSecond = document.getElementsByClassName('assetsSecondButtons');

function selectImage(e) {
  db.ref('assetsurlPictures').set(e.target.innerHTML)
}

for(let i = 0; i < assetsSecond.length ; i++) {
  assetsSecond[i].addEventListener('click', selectImage)
}
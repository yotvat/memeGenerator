'use strict'

var gImg =
    [{ id: makeId(), url: 'img/1.jpg', keywords: ['president', 'funny'] },
    { id: makeId(), url: 'img/2.jpg', keywords: ['dog', 'cute'] }]

var gMeme = {
    selectedImgId: gImg[0].id,
    selectedLineIdx: 0,
    lines: [
        {
            number: 1,
            txt: 'MAGA',
            size: 20,
            color: 'green'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 4, 'presiden': 2 }

function getImg() {
    return gImg
}

function findImg(id) {
     return  gImg.find(img => img.id === id)

}

function getMemeImgId(){
    return gMeme.selectedImgId
}

function setLineTxt(value) {
    gMeme.lines[0].txt = value


}

function setImg(id) {
    gMeme.selectedImgId = id
}
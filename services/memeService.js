'use strict'

var gImg = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'president'] }]
var gMeme = {
    selectedImgId: 1,
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

function getImg(id) {
    return gImg.find(Img => Img.id === id).url
}

function setLineTxt(value) {
    gMeme.lines[0].txt = value
    console.log(gMeme.lines[0].txt);
}

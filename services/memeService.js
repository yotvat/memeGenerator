'use strict'

var gImg =
    [{ id: makeId(), url: 'img/1.jpg', keywords: ['president', 'funny'] },
    { id: makeId(), url: 'img/2.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/3.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/4.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/5.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/6.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/7.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/8.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/9.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/10.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/11.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/12.jpg', keywords: ['dog', 'cute'] },
    ]


var gMeme = {
    selectedImgId: gImg[0].id,
    selectedLineIdx: 0,
    lines: [
        {
            number: 1,
            txt: 'hahaha',
            size: 20,
            color: 'green'
        }
    ]
}
var isDirUp = true
var gKeywordSearchCountMap = { 'funny': 4, 'presiden': 2 }

function getImg() {
    return gImg
}

function findImg(id) {
    return gImg.find(img => img.id === id)

}

function getMeme() {
    return gMeme
}

function setLineTxt(value) {
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function addLine() {
    const line = {
        number: gMeme.selectedLineIdx,
        txt: 'enter text',
        size: 20,
        color: 'green'
    }
    gMeme.lines.push(line)

}
function switchLine() {
    if (gMeme.lines.length <= 1) return
    if (isDirUp) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx--
    if(gMeme.selectedLineIdx===gMeme.lines.length) isDirUp = false
    if(gMeme.selectedLineIdx === 1) isDirUp = true



    console.log(gMeme.selectedLineIdx)
    
}
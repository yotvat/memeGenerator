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
            color: 'green',
            y: null,
            x: null,
            txtWidth: null,


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
        number: gMeme.lines.length + 1,
        txt: 'enter text',
        size: 20,
        color: 'green'
    }
    gMeme.lines.push(line)
    console.log(gMeme.lines)


}

function switchLine() {
    if (gMeme.lines.length <= 1) return
    if (isDirUp) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) isDirUp = false
    if (gMeme.selectedLineIdx === 0) isDirUp = true
    console.log(gMeme.selectedLineIdx)
    renderMeme()

}

function findLine(offsetX, offsetY) {
    const idx = gMeme.lines.findIndex(line => {
        let { x, y, size, txtWidth } = line
        if (gCtx.textAlign === 'center') x = x - (txtWidth / 2)
        // console.log('x,y,offsetX,offsetY', x, y, offsetX, offsetY)
        return offsetX >= x && offsetX <= (x + txtWidth) &&
            offsetY >= y - size && offsetY <= y + size + (size / 2)
    })
    if (idx !== -1) gMeme.selectedLineIdx = idx
}
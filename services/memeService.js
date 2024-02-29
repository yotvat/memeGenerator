'use strict'

var isDirUp = true
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
    { id: makeId(), url: 'img/13.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/14.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/15.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/16.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/17.jpg', keywords: ['dog', 'cute'] },
    { id: makeId(), url: 'img/18.jpg', keywords: ['dog', 'cute'] },
    ]

var gMeme = {
    selectedImgId: gImg[0].id,
    selectedLineIdx: 0,
    lines: [
        {
            number: 1,
            txt: 'hahaha',
            size: 30,
            color: 'black',
            y: null,
            x: null,
            txtWidth: null,
            align:'center',
            font:'impact',


        }
    ]
}

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

function setColorInput(value) {
    gMeme.lines[gMeme.selectedLineIdx].color = value
}

function setLineTxt(value) {
    if(!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function addLine() {
    const line = {
        number: gMeme.lines.length + 1,
        txt: 'enter text',
        size: 30,
        color: 'black'
    }
    gMeme.lines.push(line)
}

function fontUpClick() {
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}

function FontDownClick() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function switchLine() {
    if (gMeme.lines.length <= 1) return
    if (isDirUp) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) isDirUp = false
    if (gMeme.selectedLineIdx === 0) isDirUp = true
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
    return idx
}

function deleteline() {
    if (!gMeme.lines) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx--

}

function alignLeft(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    
}

function alignCenter(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    
}

function alignRight(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'

}

function setFont(value){
    gMeme.lines[gMeme.selectedLineIdx].font = value
}

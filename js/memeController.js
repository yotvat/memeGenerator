'use strict'
let gElCanvas
let gCtx
var LINE_SPACE = 60
function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()

    //window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme() {
    var meme = getMeme()
    const currImageId = meme.selectedImgId
    const img = new Image()
    img.src = findImg(currImageId).url

    img.onload=()=>{
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let y = LINE_SPACE
        meme.lines.forEach(line => {
        drawText(line.txt,gElCanvas.width / 2, y)
        y+=LINE_SPACE

    })
}
}

function onSetLineChange({value}){
    setLineTxt(value)
    renderMeme()
}

function drawText(text, x, y) {
    const meme = getMeme()
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'black'

	gCtx.fillStyle = meme.lines[meme.selectedLineIdx].color

	gCtx.font = meme.lines[meme.selectedLineIdx].size +'px' + ' impact'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
}

function downloadCanvas(elLink) {
    elLink.download = 'your-canvas'

    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onColorInput({value}){
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = value
    console.log(meme.lines)
    renderMeme()
}

function onFontUpClick(){
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size +=5
    renderMeme()
}

function onFontDownClick(){
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size -=5
    renderMeme()
}

function onAddLineClick(){
    const meme = getMeme()
    addLine()
    renderMeme()
}

function onSwitchLineClick(){
switchLine()
}



//function resizeCanvas() {
    // const elContainer = document.querySelector('.canvas-container')
    
    // // Changing the canvas dimension clears the canvas
    // gElCanvas.width = elContainer.clientWidth
// }

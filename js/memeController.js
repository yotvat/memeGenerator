'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    // renderMeme()


    //window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(gMeme.lines[0].txt,100,100)
    
}

function onSetLineChange({value}){
    setLineTxt(value)
    var img = findImg(gMeme.selectedImgId)
    const elImg = new Image()
    elImg.src = img.url
    renderMeme(elImg)
}

function drawText(text, x, y) {
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'black'

	gCtx.fillStyle = 'white'

	gCtx.font = '45px Arial'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
}





//function resizeCanvas() {
    // const elContainer = document.querySelector('.canvas-container')
    
    // // Changing the canvas dimension clears the canvas
    // gElCanvas.width = elContainer.clientWidth
// }

'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()


    //window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme() {
    const img = new Image()
    img.src = getImg(1)
    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(gMeme.lines[0].txt,100,100)
    }





    // console.log(elImg.src)
    // gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    // gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSetLineChange({value}){
    setLineTxt(value)
    renderMeme()
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

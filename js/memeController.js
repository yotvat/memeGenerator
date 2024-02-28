'use strict'
let gElCanvas
let gCtx
var SPACING = 60
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
        let y = SPACING
        meme.lines.forEach((line,idx )=> {
            const meme = getMeme()
        drawText(line.txt,gElCanvas.width / 2, y)
        let txtWidth = gCtx.measureText(line.txt).width
        line.txtWidth = txtWidth
        line.y = y
        line.x = gElCanvas.width / 2
        if(meme.selectedLineIdx===idx)drawFrame(line.x,y,txtWidth,line.size)
        y+=SPACING

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

function drawFrame(x,y,txtWidth,size){
    gCtx.beginPath()
    gCtx.setLineDash([4,10])
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x - 5 - (txtWidth / 2) ,y-size+8,txtWidth+8,size+5)
    gCtx.setLineDash([])
}

function onLineClick(ev){
   var x = ev.offsetX
   var y = ev.offsetY
    const currLine = gMeme.lines.find(line => {
        const {x,y,size,txtWidth} = line
       return ev.offsetX >= x - 5 - (txtWidth / 2) && ev.offsetX <= x  + (txtWidth / 2) + 5 &&
       ev.offsetY >= y && ev.offsetY <= y + size
    })
    console.log('currLine',currLine)
}

//function resizeCanvas() {
    // const elContainer = document.querySelector('.canvas-container')
    
    // // Changing the canvas dimension clears the canvas
    // gElCanvas.width = elContainer.clientWidth
// }

'use strict'
let gElCanvas
let gCtx
var SPACING = 60
let gStartPos
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

// var gFilteBy = ''

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    // addListeners()
}

function renderMeme() {
    var meme = getMeme()
    const currImageId = meme.selectedImgId
    const img = new Image()
    img.src = findImg(currImageId).url

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let y = SPACING
        meme.lines.forEach((line, idx) => {
            const meme = getMeme()
            drawText(line.txt, gElCanvas.width / 2, y, line.color, line.size, line.align, line.font)
            // drawText(line.txt,gElCanvas.width / 2, line.y+SPACING, line.color, line.size, line.align, line.font)

            let txtWidth = gCtx.measureText(line.txt).width
            line.txtWidth = txtWidth

            line.y = y
            line.x = gElCanvas.width / 2
            if (meme.selectedLineIdx === idx) {
                drawFrame(gElCanvas.width / 2, y, txtWidth, line.size)
            }

            y += SPACING
        })
    }
}

function drawText(text, x, y, color = 'black', size = 40, align = 'center', font = 'impact') {
    const meme = getMeme()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'

    gCtx.fillStyle = color

    gCtx.font = size + 'px' + ` ${font}`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineChange({ value }) {
    setLineTxt(value)
    renderMeme()
}

function downloadCanvas(elLink) {
    console.log('hi')
    elLink.download = 'your-canvas'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onColorInput({ value }) {
    setColorInput(value)
    renderMeme()
}

function onFontUpClick() {
    fontUpClick()
    renderMeme()
}

function onFontDownClick() {
    FontDownClick()
    renderMeme()
}

function onAddLineClick() {
    addLine()
    renderMeme()
}

function onSwitchLineClick() {
    switchLine()
}

function drawFrame(x, y, txtWidth, size) {
    gCtx.beginPath()
    gCtx.setLineDash([4, 10])
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    // gCtx.strokeRect(x - 5 - (txtWidth / 2) ,y - size, txtWidth + 8 ,size+size)
    gCtx.strokeRect(x - 15 - (txtWidth / 2), y - size, txtWidth + 28, size + size)
    gCtx.setLineDash([])
}

function onLineClick(ev) {
    const meme = getMeme()
    const { offsetX, offsetY, clientX, clientY, value } = ev
    var lineIdx = findLine(offsetX, offsetY)
    renderMeme()
    if (lineIdx === -1) return;
    else document.querySelector('.txt-canvas').value = meme.lines[lineIdx].txt


}

function onDeleteLineClick() {
    deleteline()
    renderMeme()
}

function onAlignLeftClick() {
    alignLeft()
    renderMeme()

}

function onAlignCenterClick() {
    alignCenter()
    renderMeme()

}

function onAlignRightClick() {
    alignRight()
    renderMeme()
}

function onSetFont({ value }) {
    setFont(value)
    renderMeme()
}





//ADD LISTENERS
// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onLineDown)
//     gElCanvas.addEventListener('mousemove', onLineMove)
//     gElCanvas.addEventListener('mouseup', onLineUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onLineDown)
//     gElCanvas.addEventListener('touchmove', onLineMove)
//     gElCanvas.addEventListener('touchend', onLineUp)
// }





// //DRAG AND DROP
// function onLineDown(ev) {
//     gStartPos = getEvPos(ev)
//     console.log('gStartPos',gStartPos)
//     if (!isLineClick(gStartPos)) return

//     setLineDrag(true)
//     // document.body.style.cursor = 'grabbing'
// }

// function onLineMove(ev) {
//     const meme = getMeme()
//     const { isDrag } = meme.lines[meme.selectedLineIdx]
//     if (!isDrag) return

//     const pos = getEvPos(ev)

//     const dx = pos.x - meme.lines[meme.selectedLineIdx].x
//     const dy = pos.y - meme.lines[meme.selectedLineIdx].y

//     moveLine(dx, dy)

//     meme.lines[meme.selectedLineIdx].x = pos.x
//     meme.lines[meme.selectedLineIdx].y = pos.y
//     renderMeme()
// }

// function onLineUp() {
//     setLineDrag(false)
//     // document.body.style.cursor = 'grab'

// }

// function getEvPos(ev) {
//     let pos = {
//         x: ev.offsetX,
//         y: ev.offsetY,
//     }

//     if (TOUCH_EVENTS.includes(ev.type)) {

//         ev.preventDefault()
//         ev = ev.changedTouches[0]

//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//         }
//     }
//     return pos
// }






//NOT WORKING YET
// function onLineUpClick(){
//     lineUp()
//     renderMeme()
// }

// function onLineDownClick(){
//     lineDown()
//     renderMeme()
// }


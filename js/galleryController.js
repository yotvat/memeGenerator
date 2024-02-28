'use strict'

function renderGallery() {
    const images = getImg()
    const strHTMLs = images.map(img => `
    <img onclick="onImgClick(this)" id="${img.id}" src="${img.url}" alt="${img.keywords[0]}">
    `)
    document.querySelector('.img-container').innerHTML = strHTMLs.join('')
}

function onImgClick(elImg) {
    // console.log(elImg.naturalHeight)
    setImg(elImg.id)
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.editor').classList.remove('hidden')
    renderMeme()
}

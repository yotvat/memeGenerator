'use strict'

function renderGallery() {
    const images = getImg()
    const strHTMLs = images.map(img => `
    <img onclick="onImgClick(this)" id="${img.id}" src="${img.url}" alt="${img.keywords[0]}">
    `)
    document.querySelector('.img-container').innerHTML = strHTMLs.join('')
}

function onImgClick(elImg) {
    setImg(elImg.id)
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.editor').classList.remove('hidden')
    renderMeme()
}

function onGalleryClick() {
    document.querySelector('.gallery').classList.remove('hidden')
    document.querySelector('.editor').classList.add('hidden')
    document.body.classList.remove('menu-open')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onFlexibleClick() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.editor').classList.remove('hidden')

    const img = getImg()
    const meme = getMeme()
    const idx = getRandomInt(0, 19)
    setImg(img[idx].id)
    meme.lines[meme.selectedLineIdx].txt = img[idx].keywords[getRandomInt(0, 2)]
    renderMeme()
}
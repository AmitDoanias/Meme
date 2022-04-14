'use strict'


function onInit() {
    createImages()
    renderImages()
    getCanvas()
}


function renderImages() {
    const gallery = getGallery()
    const elGallery = document.querySelector('.gallery')
    const strHTML = gallery.map(img => `<img class="img" src="${img.src}" alt="" onclick="onImage(this,${img.id})">`)
    elGallery.innerHTML += strHTML.join('')
}

function onImage(elImg, id) {
    showCanvas()
    let meme = getMeme()
    meme.selectedImgId = id
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(meme, gElCanvas.width / 2) // change gElCanvas

}

function showCanvas() {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = 'flex'
    // gElCanvas.style.display = 'block'
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'
}

function hideCanvas() {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = 'none'
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'flex'
}

function onEdit() {
    // toogleLinks()
    const elGallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.meme-editor')
    if (elEditor.style === 'none') {
        elEditor.style.display = 'flex'
        elGallery.style.display = 'none'
    } else {
        elGallery.style.display = 'grid'
        elEditor.style.display = "none"
    }

}


// function toogleLinks() {
//     const elGallery = document.querySelector('.gallery')
//     const elEdit = document.querySelector('.edit')
//     if (elEdit.innerText === 'Edit') {
//         elEdit.innerText = 'Gallery'
//         showCanvas()
//     } else {
//         hideCanvas()
//         elEdit.innerText = 'Edit'
//         elGallery.style.display = 'grid'
//     }
// }



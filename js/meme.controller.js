'use strict'
let gElCanvas
let gCtx


function Init() {
    renderMeme()
}

function getCanvas() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}


function renderMeme() {
    getCanvas()
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    let meme = getMeme()
    drawImg(meme, gElCanvas.width, gElCanvas.height)
}

function drawText(currMeme, x, y) {
    let txt = currMeme.line[0].txt
    let fontSize = currMeme.line[0].size
    let align = currMeme.line[0].align
    let color = currMeme.line[0].color
    // gCtx.textBaseline = 'middle';
    gCtx.textAlign = align;
    gCtx.lineWidth = 1;
    gCtx.font = `${fontSize}px impact`
    gCtx.fillStyle = 'white'
    gCtx.fill()
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = color
    gCtx.strokeText(txt, x, y)
}

function drawImg(currMeme) {
    var img = new Image();
    img.src = `imgs/${currMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(currMeme, gElCanvas.width / 2, gElCanvas.height / 8);
    };
}

function onSetLineTxt(val) {
    SetLineTxt(val)
    renderMeme()
}


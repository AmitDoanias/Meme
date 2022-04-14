'use strict'
let gElCanvas
let gCtx

// function Init() {
//     renderMeme()
// }

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

function drawText(currMeme, x) {
    let lines = currMeme.line
    lines.forEach(line => {
        let txt = line.txt
        let fontSize = line.size
        let align = line.align
        let color = line.color
        // gCtx.textBaseline = 'middle';
        gCtx.textAlign = align;
        gCtx.lineWidth = 1;
        gCtx.font = `${fontSize}px impact`
        gCtx.fillStyle = color
        gCtx.fill()
        gCtx.fillText(txt, x, line.height)
        gCtx.strokeStyle = 'white'
        gCtx.strokeText(txt, x, line.height)

    })
}

function drawImg(currMeme) {
    var img = new Image();
    img.src = `imgs/${currMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(currMeme, gElCanvas.width / 2);
    };
}

function onSetLineTxt(val) {
    SetLineTxt(val)
    renderMeme()
}

function onChangeColor(val) {
    changeColor(val)
    renderMeme()
}

function onIncrease() {
    increase()
    renderMeme()
}

function onDecrease() {
    decrease()
    renderMeme()
}

function onAddTxt() {
    addTxt()
    renderMeme()
}

function onSwitchTxt() {
    switchTxt()
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas'
}

function onAlignLeft(val) {
    alignLeft()
    renderMeme()
}


// function drawRect(x, y) {
//     gCtx.rect(x, y, 200, 200);
//     gCtx.fillStyle = 'green';
//     gCtx.fillRect(x, y, 200, 200);
//     gCtx.strokeStyle = 'red';
//     gCtx.stroke();
// }
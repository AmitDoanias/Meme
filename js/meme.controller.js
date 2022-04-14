'use strict'
let gElCanvas
let gCtx

// function Init() {
//     renderMeme()
// }



// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

function getCanvas() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        createCircle(center)
        renderCanvas()
    })
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
        gCtx.font = `${fontSize}px ${line.font}`
        gCtx.fillStyle = color
        // gCtx.fill()
        gCtx.fillText(txt, x, line.height)
        gCtx.strokeStyle = 'black'
        gCtx.strokeText(txt, x, line.height)
    })
    checkAlignFocus()
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

function onFocus() {
    checkAlignFocus()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas.jpg'
}

function onAlign(align) {
    setAlign(align)
    renderMeme()
}

function onChangeFont(font) {
    changeFont(font)
    renderMeme()
}

function onMoveLine(val) {
    moveLine(val)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo: ${uploadedImgUrl}`
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share  
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}
function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}


function drawRect(x, y, xEnd, yEnd) {
    gCtx.beginPath()
    gCtx.rect(x, y, xEnd, yEnd);
    gCtx.closePath()
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}


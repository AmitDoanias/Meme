'use strict'
var gMeme = {
    selectedImgId: 1,
    SelectedLineIdx: 0,
    line: [
        {
            txt: 'Your Text',
            size: 30,
            font: 'impact',
            align: 'center',
            color: 'black',
            height: 60,
            isDrag: 'false'
        },
        {
            txt: 'Your Text',
            size: 30,
            font: 'impact',
            align: 'center',
            color: 'black',
            height: 350,
            isDrag: 'false'
        }
    ]
}

function getMeme() {
    return gMeme
}

function SetLineTxt(val) {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line[currLine].txt = val
}

function changeColor(val) {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line[currLine].color = val
}

function increase() {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line[currLine].size += 5
}

function decrease() {
    let currLine = gMeme.SelectedLineIdx
    if (gMeme.line[currLine].size < 15) return
    gMeme.line[currLine].size -= 5
}

function addTxt() {
    let lines = gMeme.line
    let line = {
        txt: 'Your Text',
        size: 30,
        font: 'impact',
        align: 'center',
        color: 'black',
        height: 250,
    }
    lines.push(line)
}

function switchTxt() {
    gMeme.SelectedLineIdx++
    if (gMeme.SelectedLineIdx >= gMeme.line.length) gMeme.SelectedLineIdx = 0
}

function setAlign(align) {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line[currLine].align = align
}

function changeFont(font) {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line[currLine].font = font
}

function deleteLine() {
    let currLine = gMeme.SelectedLineIdx
    gMeme.line.splice(currLine, 1)
}

function checkAlignFocus() {
    let currLine = gMeme.SelectedLineIdx
    let txt = gMeme.line[currLine].txt
    let x = gElCanvas.width / 2
    let y = gMeme.line[currLine].height
    switch (gMeme.line[currLine].align) {
        case 'center':
            drawRect(x - gCtx.measureText(txt).width / 2, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
        case 'left':
            drawRect(x, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
        case 'right':
            drawRect(x - gCtx.measureText(txt).width, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
    }
}

function moveLine(val) {
    let currLine = gMeme.SelectedLineIdx
    console.log(val)
    console.log('gMeme[currLine].line', gMeme.line[currLine].height)
    if (gMeme.line[currLine].height < 60 && val < 0) return
    else if (gMeme.line[currLine].height > 370 && val > 0) return
    gMeme.line[currLine].height += val
}
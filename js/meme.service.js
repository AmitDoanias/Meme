'use strict'


var gMeme = {
    selectedImgId: 1,
    SelectedLineIdx: 0,
    line: [
        {
            txt: 'baba',
            size: 30,
            align: 'center',
            color: 'black',
            height: 50
        },
        {
            txt: 'aga',
            size: 30,
            align: 'center',
            color: 'black',
            height: 350
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
        align: 'center',
        height: 250,
        color: 'black'
    }
    lines.push(line)
}

function switchTxt() {
    gMeme.SelectedLineIdx++
    if (gMeme.SelectedLineIdx >= gMeme.line.length) gMeme.SelectedLineIdx = 0
}


// function alignLeft() {
//     let currLine = gMeme.SelectedLineIdx
//     gMeme.line[currLine].align = 'left'
//     console.log(gMeme.line[currLine].align)
// }




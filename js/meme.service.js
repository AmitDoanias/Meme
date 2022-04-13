'use strict'


var gMeme = {
    selectedImgId: 1,
    SelectedLineIdx: 0,
    line: [
        {
            txt: 'Test',
            size: 30,
            align: 'center',
            color: 'black'
        }
    ]
}

function getMeme() {
    return gMeme
}

function SetLineTxt(val) {
    //TODO : find by id and use getMeme
    gMeme.line[0].txt = val
    console.log('in setLineTXT')
}

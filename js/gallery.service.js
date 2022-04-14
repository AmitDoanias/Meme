'use strict'

let gGallery = []

function getGallery() {
    return gGallery
}

function createImages() {
    createImage(1, `imgs/${1}.jpg`, ['funny', 'men'])
    createImage(2, `imgs/${2}.jpg`, ['funny', 'dog'])
    createImage(3, `imgs/${3}.jpg`, ['cute', 'baby'])
    createImage(4, `imgs/${4}.jpg`, ['cute', 'cat'])
    createImage(5, `imgs/${5}.jpg`, ['baby', 'cute'])
    createImage(6, `imgs/${6}.jpg`, ['moive', 'men'])
    createImage(7, `imgs/${7}.jpg`, ['baby', 'cute'])
    createImage(8, `imgs/${8}.jpg`, ['funny', 'hat'])
    createImage(9, `imgs/${9}.jpg`, ['funny', 'babe'])
    createImage(10, `imgs/${10}.jpg`, ['men', 'politics'])
    createImage(11, `imgs/${11}.jpg`, ['men', 'funny'])
    createImage(12, `imgs/${12}.jpg`, ['men', 'funny'])
    createImage(13, `imgs/${13}.jpg`, ['drink', 'movie'])
    createImage(14, `imgs/${14}.jpg`, ['men', 'glasses'])
    createImage(15, `imgs/${15}.jpg`, ['men', 'cigarete'])
    createImage(16, `imgs/${16}.jpg`, ['comics', 'funny'])
    createImage(17, `imgs/${17}.jpg`, ['politics', 'men'])
    createImage(18, `imgs/${18}.jpg`, ['comics', 'funny'])
}

function createImage(id, src, kind) {
    let img = {
        id,
        src,
        keywords: ['funny', 'cat']
    }
    gGallery.push(img)
}








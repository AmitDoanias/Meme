'use strict'

let gGallery = []

function getGallery() {
    return gGallery
}

// createImages()

function createImages() {
    for (let i = 1; i <= 18; i++) {
        createImage(i, `imgs/${i}.jpg`)
    }
}


// function createImages{
//     createImage(1,)
//     createImage(2,)
//     createImage(3,)
//     createImage(4,)
//     createImage(5,)
//     createImage(6,)
//     createImage(7,)
//     createImage(8,)
//     createImage(9,)
//     createImage(10,)
//     createImage(11,)
//     createImage(12,)
//     createImage(13,)
//     createImage(14,)
//     createImage(15,)
//     createImage(16,)
//     createImage(17,)
//     createImage(18,)
// }

function createImage(id, src) {
    let img = {
        id,
        src,
        keywords: ['funny', 'cat']
    }
    gGallery.push(img)
}


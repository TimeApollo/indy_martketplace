const express = require('express')
const artwork = express.Router()

artwork.get('/', (req, res) => {
    console.log('Test')
    res.json(
        {
            imgLink: 'something',
            pieceId: 2,
            userId: 12,
            mediums: {
                type: 'photography',
                styles: {
                    portraits: true
                }
            }
        },
        {
            imgLink: 'something else',
            pieceId: 3,
            userId: 16,
            mediums: {
                type: 'painting',
                styles: {
                    abstract: true,
                    surrealism: true
                }
            }
        })
})

module.exports = {
    artwork
}
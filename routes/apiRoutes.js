let DBJSON = require('../db/db.json')
const fs = require('fs');
const path = require('path');
const { NODATA } = require('dns');
const filePath = __dirname + '/../db/db.json';
var generate = require('project-name-generator');



module.exports = (app) => {
    //Api Get Request
    app.get('/api/notes', (req, res) => {
        res.json(DBJSON)
    })

    app.post('/api/notes', (req, res) => {
        const randomeId = generate().dashed;
        console.log("this is random Word :" + randomeId);
        const NoteData = {
            "title": req.body.title,
            "text": req.body.text,
            "id": randomeId
        }
        DBJSON.push(NoteData)
        fs.writeFile(filePath, JSON.stringify(DBJSON), (err) => {
            if (err) console.log(err)
            console.log('The file has been saved!');
            res.json(DBJSON)
        })
    })

    app.delete('/api/notes/:id', (req, res) => {
        console.log("new data 1 ", DBJSON);

        DBJSON = DBJSON.filter(i => i.id !== req.params.id)
        console.log(DBJSON);
        fs.writeFile(filePath, JSON.stringify(DBJSON), (err) => {
            if (err) console.log(err)
            console.log('The file has been saved!');
            res.json(DBJSON)
        })
    })
}
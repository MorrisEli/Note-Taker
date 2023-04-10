const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const allNotes = require('./db/db.json');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(allNotes);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return newNote;
}


app.post('./api/notes', (req, res) => {
    req.body.id = allNotes.length.toString();

    const newNote = createNewNote(req.body, allNotes);

    res.json(newNote);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});
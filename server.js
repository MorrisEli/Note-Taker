const express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

app.get('/api/notes', (req, res) => {
    res.json(allNotes);
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

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});
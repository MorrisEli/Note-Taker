var notes = require("../db/db.json");
var fs = require("fs");
var path = require("path");
//router
//(forward supported requests to controller functions)
module.exports = function (app) {
    //app.get to handle GET reequests(callback function)
    //route paths
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("./api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "/db/db.json"));
    });

    //need to make API POST req
    //API POST req
    app.post("/api/notes", function (req, res) {
        let newNotes = {
            title : req.body.title,
            text : req.body.text,
        };
        fs.readFile("./db/db.json", "utf8", function(errpr) {
            if (error){
                return console.log(eror);
            }
            console.log("Success")
        });
        const allNotes = JSON.parse(data);
            
            allNotes.push(newNotes);
    })
}
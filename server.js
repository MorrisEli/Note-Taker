const express = require("express");
//Express app
var app = express();
//var PORT = process.env.PORT || 3000;      <-- File Issue

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

require("./routes/apiRoutes")(app);
requrie("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});
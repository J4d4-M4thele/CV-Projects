const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
//initialise express
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
//parsing requests into json objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use(
    cookieSession({
        name: 'bezkoder-session',
        //secret environmental variable
        keys: ['COOKIE_SECRET'], 
        //cookie only sent through http requets
        httpOnly: true
    })
);

//****REQUESTS*****/
app.get("/", (req, res) => {
    res.json({ message: 'Welcome to bezkoder application.' });
});

//set port and listener
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
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

const db = require('./app/models');
const Role = db.role;


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
  
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


//creating express session
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

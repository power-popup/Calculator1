

const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = { 
  origin: '*'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({limit: '50mb'}));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our application." });
});

require("./routes/calcaulator.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cors = require("cors");


const express = require("express");
const app = express();
app.use(bodyParser.json())

const port = 8000

app.get('/', (req, res) => {
  res.json({eqax:'Hello World!'})
})



//CONNECTING WITH DB
// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'harshal',
//     host: 'localhost',
//     database: 'eqax_db',
//     password: 'test123',
//     port: 5432,
// })

//My routes
const scoreRoutes = require("./routes/score");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", scoreRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  


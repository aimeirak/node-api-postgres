const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT =4000;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

app.get("/",(req,res)=>{

    res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(PORT,()=>{
    console.log(`App Running on port${PORT}`);
})
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios');
const cors = require('cors');
require('dotenv').config()
app.use(cors({
  origin: '*'
}))

app.post("/:endpoint([\\/\\w\\.-]*)", (req, res, next) => {
  
  let endpoint = process.env.API_BASE_URL + req.params.endpoint

  axios.get(endpoint).then(response => {
    res.json(response.data)}).catch(error =>{
      res.json(error)
      })
     
  
});

app.listen(port);
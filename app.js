const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/abilityStone.html")
});

app.get('/engraving', (req,res) => {
  res.sendFile(__dirname + "/engravingPlanner.html")
})
app.listen(3000, () =>{
    console.log('server up')
});


const path = require('path')
const app = require('express')

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})
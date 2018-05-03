// dependencies
const express = require('express');
const path = require('path');

// config
const clientPath = '../client/';

// Create an Express app
const app = express();

// serve frontend files
app.use(express.static(clientPath));

// If no other route rule fulfilled then return index.html
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

// Start the Express app on port 3000
app.listen(3000,()=>{
  console.log("Vacation Premises server running on port 3000!");
});
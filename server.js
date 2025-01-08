// server.js  
const express = require('express');  
const bodyParser = require('body-parser');  
const { connectDatabase } = require('./database'); // Import connectDatabase  
const userRoutes = require('./routes/userRoutes'); // Import user routes  

const app = express();  
const PORT = process.env.PORT || 3000;  

app.use(bodyParser.json());  

// Connect to the database  
connectDatabase().then(() => {  
    // Use user routes  
    app.use('/users', userRoutes);  
  
    app.listen(PORT, () => {  
        console.log(`Server is running on http://localhost:${PORT}`);  
    });  
});
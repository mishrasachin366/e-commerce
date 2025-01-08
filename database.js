// database.js  
const { Sequelize } = require('sequelize');  

// Create a Sequelize instance  
const sequelize = new Sequelize('my_api_db', 'postgres', '123456', {  
    host: 'localhost',  
    dialect: 'postgres',  
});  

// Test the connection  
const connectDatabase = async () => {  
    try {  
        await sequelize.authenticate();  
        console.log('Connection to the database has been established successfully.');  
    } catch (error) {  
        console.error('Unable to connect to the database:', error);  
    }  
};  

// Export the sequelize instance and the connection function  
module.exports = {  
    sequelize,  
    connectDatabase,  
};

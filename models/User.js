const { DataTypes } = require('sequelize');  
const { sequelize } = require('../database');  

const User = sequelize.define('User', {  
    id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
        allowNull: false,  
    },  
    name: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    email: {  
        type: DataTypes.STRING,  
        allowNull: false,  
        unique: true,  
    },  
    password: { // Add this line to the User model  
        type: DataTypes.STRING,  
        allowNull: false,  
    }  
}, {  
    timestamps: true, // Automatically manage 'createdAt' and 'updatedAt'  
});  

module.exports = { User };

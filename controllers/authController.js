const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');  
const { User } = require('../models/User'); // Adjust the import based on your model path  

const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable  

// Register a new user  
exports.register = async (req, res) => {  
    const { name, email, password } = req.body;  

    try {  
        const hashedPassword = await bcrypt.hash(password, 10);  
        const user = await User.create({ name, email, password: hashedPassword });  
        res.status(201).json({ message: 'User created successfully', user });  
    } catch (error) {  
        res.status(500).json({ message: 'Error creating user', error });  
    }  
};  

// User login  
exports.login = async (req, res) => {  
    const { email, password } = req.body;  

    try {  
        const user = await User.findOne({ where: { email } });  
        if (!user) {  
            return res.status(404).json({ message: 'User not found' });  
        }  

        const match = await bcrypt.compare(password, user.password);  
        if (!match) {  
            return res.status(401).json({ message: 'Invalid credentials' });  
        }  

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });  
        res.json({ token });  
    } catch (error) {  
        res.status(500).json({ message: 'Login error', error });  
    }  
};  

// Middleware to authenticate JWT  
exports.authenticate = (req, res, next) => {  
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token  

    if (!token) {  
        return res.status(401).json({ message: 'Access denied. No token provided.' });  
    }  

    try {  
        const decoded = jwt.verify(token, SECRET_KEY);  
        req.user = decoded;  
        next();  
    } catch (error) {  
        res.status(400).json({ message: 'Invalid token' });  
    }  
};
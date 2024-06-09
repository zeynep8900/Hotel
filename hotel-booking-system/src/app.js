const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotelRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URL = 'mongodb://localhost:27017'; // MongoDB URL'si

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB'ye başarıyla bağlanıldı.");
    } catch (err) {
        console.error("MongoDB'ye bağlanırken hata oluştu:", err.message);
        process.exit(1); 
    }
};

// Middleware
app.use(bodyParser.json());

// Middleware: API Authentication
const jwt = require('jsonwebtoken');

app.use('/api', (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Yetki tokeni bulunamadı.' });
    }

    jwt.verify(token, 'gizliAnahtar', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Geçersiz token.' });
        } else {
            console.log("API Authentication Middleware - Yetkilendirme başarılı.");
            next();
        }
    });
});


// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/hotels', hotelRoutes); 
app.use('/api/admin', adminRoutes); 
app.use('/api/bookings', bookingRoutes); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

connectToDatabase(); // MongoDB'ye bağlan

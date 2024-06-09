const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authenticateUser = require('../middleware/authenticateUser');

router.post('/bookings', authenticateUser, bookingController.bookHotel);

module.exports = router;

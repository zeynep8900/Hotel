const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    numberOfPeople: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

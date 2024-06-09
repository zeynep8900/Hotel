const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    availableFrom: { type: Date, required: true },
    availableTo: { type: Date, required: true },
    capacity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;

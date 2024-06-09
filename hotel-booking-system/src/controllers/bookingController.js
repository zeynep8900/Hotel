const Booking = require('../models/bookingModel');
const Hotel = require('../models/hotelModel');

exports.bookHotel = async (req, res) => {
    const booking = new Booking(req.body);
    try {
        const hotel = await Hotel.findById(booking.hotelId);
        if (hotel.capacity < booking.numberOfPeople) {
            return res.status(400).send({ error: 'Yetersiz kapasite' });
        }
        hotel.capacity -= booking.numberOfPeople;
        await hotel.save();
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
};

const Hotel = require('../models/hotelModel');

exports.addHotel = async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        await hotel.save();
        res.status(201).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!hotel) {
            return res.status(404).send();
        }
        res.send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).send();
        }
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.send(hotels);
    } catch (error) {
        res.status(500).send();
    }
};

const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const authenticateAdmin = require('../middleware/authenticateAdmin');

router.post('/hotels', authenticateAdmin, hotelController.addHotel);
router.put('/hotels/:id', authenticateAdmin, hotelController.updateHotel);
router.delete('/hotels/:id', authenticateAdmin, hotelController.deleteHotel);
router.get('/hotels', hotelController.getHotels);

module.exports = router;

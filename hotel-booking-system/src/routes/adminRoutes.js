const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

console.log("Admin Routes file loaded."); // Bu satır eklendi

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);



module.exports = router;

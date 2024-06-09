const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async (req, res) => {
    const user = new User({ ...req.body, role: 'admin' });
    try {
        await user.save();
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user || user.role !== 'admin') {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }
        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.send({ user, token });
    } catch (error) {
        res.status(500).send(error);
    }
};

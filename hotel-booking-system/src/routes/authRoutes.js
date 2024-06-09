const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const router = express.Router();

const users = [
    { id: 1, username: 'user1', password: 'password1' },
];

const JWT_SECRET = 'secretkey';

router.use(bodyParser.json());

router.post('/loginauth', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                res.status(500).json({ error: 'JWT oluşturulurken bir hata oluştu' });
            } else {
                res.json({ token });
            }
        });
    } else {
        res.status(401).json({ error: 'Geçersiz kullanıcı adı veya şifre' });
    }
});

module.exports = router;

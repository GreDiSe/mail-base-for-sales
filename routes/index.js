const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', ( req, res ) => {
    res.render('index', { title: 'Express' });
});

router.get('/text', ( req, res ) => {
    res.send('hyi')
});

module.exports = router;

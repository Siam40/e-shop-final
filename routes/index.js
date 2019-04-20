var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/shop', function(req, res, next) {
  res.render('shop');
});
router.get('/cart', function(req, res, next) {
  res.render('cart');
});
router.get('/product-details', function(req, res, next) {
  res.render('product-details');
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});
module.exports = router;

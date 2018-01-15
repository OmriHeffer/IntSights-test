const router = require('express').Router();
const mongoose = require('mongoose');
const WebData = mongoose.model('WebData');
const ObjectId = require('mongoose').Types.ObjectId; 

router.get('/data', function(req, res, next) {
  WebData.find({}, (err, data) => {
    if (err) return next(new Error(err));
    return res.json(data);
  })
});

router.get('/data/1', function(req, res, next) {
  WebData.findOne({"_id": new ObjectId("5a5bbb27008038394c7232c8")}, (err, data) => {
    if (err) return next(new Error(err));
    return res.json(data);
  })
});


module.exports = router;

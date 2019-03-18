var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

router.get('/all', function(req, res, next) {
  res.send(colors.colors);

router.get('/:color', function(req, res, next) {
  
  
  for (var color in colors.colors) {
    if(colors.colors[color].color == req.params.color.toLowerCase()) {
      res.send(colors.colors[color]);
    } 
  }
  
  res.sendStatus(404);
})


for (var color in colors.color) {
  route.get('/'+colors.colors[color].color, function(req, res, next) {
    res.send(colors.colors[color]);
  })
}

module.exports = router;

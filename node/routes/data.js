var express = require("express");
var Data = require("../model/Data");
const router = express.Router();


router.get('/get', async (req, res) => {
  let body = req.body;
  let data = new Data.Data();

  data.get().then(result => {

      if (result) {
          data = {
              "status": "success",
              "data": result
          }
      }
      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "fail"
          }
          res.end(JSON.stringify(data));
      });
});


router.post('/getnext', async (req, res) => {
  let body = req.body;
  let data = new Data.Data();
  data.off = body.data.off;

  data.getrequired().then(result => {

      if (result) {
          data = {
              "status": "success",
              "data": result
          }
      }
      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "fail"
          }
          res.end(JSON.stringify(data));
      });
});


module.exports = router;

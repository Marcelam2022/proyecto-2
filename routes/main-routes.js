
const express = require("express");
const router = express.Router();
const db = require("../database.json");


router.get("/", (req, res) => {
  

  const filter = req.query;

  

  let result = db.filter((item) => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });

  
  res.status(200).json(result);
});

module.exports = router;

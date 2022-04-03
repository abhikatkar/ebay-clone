const express = require("express");

const Data = require("../model/data.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const data = await Data.create(req.body);
    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const data = await Data.find().lean().exec();
    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const data = await Data.findById(req.params.id)
      .lean()
      .exec();
    return res.send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});




router.delete("/:id", async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});




module.exports = router;

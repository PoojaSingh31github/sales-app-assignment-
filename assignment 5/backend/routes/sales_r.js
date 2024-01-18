const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const salesModel = require("../models/sales_m");
const protectedroute = require('../middleware/protectedResource');


router.post('/addsales', protectedroute, async (req, res) => {
  try {
    const { product, quantity, amount } = req.body;
    if (!quantity || !amount || !product) {
      return res.status(400).json({ error: 'Invalid input, Please provide all values' });
    }
    const newSale = new salesModel({ product, quantity, amount });

    await newSale.save();
    res.status(201).json({ message: 'Sale added successfully', sale: newSale });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/topfive', protectedroute, async (req, res) => {
  try {
    const sales = await salesModel.find().sort({ amount: -1 }).limit(5);
    res.status(200).json(sales);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const today = new Date();
today.setHours(0, 0, 0, 0);
const todayEnd = new Date();
todayEnd.setHours(23, 59, 59, 999);
router.get('/revenue', protectedroute, async (req, res) => {
  try {
    const result = await salesModel.aggregate([
      {
        $match: {
          createdAt: { $gte: today, $lte: todayEnd },
        },
      },
      {
        $group: {
          _id: null,
          amount: { $sum: '$amount' },
        },
      },
    ]);

    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
const Booking = require('../models/bookingModel');

exports.getData = async (req,res,next) =>{
    const data = await Booking.findAll();
    res.status(200).json({AllData:data})
};

exports.postData = async (req,res,next) =>{
    console.log(req.body);
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const data = await Booking.create({
      title: title,
      price: price,
      description: description
    }).then(console.log('new record created'))
    res.status(201).json({newUserDetail: data})
};

exports.deleteData = async (req,res,next) =>{
  console.log(req.params.delId);
  console.log(req.body)
  const item = await Booking.findByPk(req.params.delId);
  item.destroy();
  console.log("deleted");
  res.status(202).json({newUserDetail: item})
};

exports.insertData = async (req,res,next) =>{
  console.log(req.params.insId);
  console.log(req.body)
  const item = await Booking.findByPk(req.params.insId);
  item.destroy();
  
  res.status(203).json({newUserDetail: item})
};
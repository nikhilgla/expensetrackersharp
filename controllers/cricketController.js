const Cricket = require('../models/cricketModel');

exports.addPlayer = async (req,res,next) =>{
    console.log(req.body);
    const name = req.body.name;
    const dob = req.body.dob;
    const bplace = req.body.bplace;
    const pic = req.body.pic;
    const matches = req.body.matches;
    const runs = req.body.runs;
    const avg = req.body.avg;
    const hundred = req.body.hundred;
    const fifty = req.body.fifty;
    const wickets = req.body.wickets;
    
    const data = await Cricket.create({
        name :name,
        dob :dob,
        bplace :bplace,
        pic :pic,
        matches :matches,
        runs :runs,
        avg :avg,
        hundred :hundred,
        fifty :fifty,
        wickets:wickets
    }).then(console.log('new record created'))
    res.status(201).json({newUserDetail: data})
};
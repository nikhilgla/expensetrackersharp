const Expense = require('../models/model');

exports.getPage = (req,res,next) =>{
    Expense.findAll()
    .then(products => {
        res.render('index', {
            prods: products,
            path: '/'
          });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postInfo =(req,res,next) =>{
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    Expense.create({
      title: title,
      price: price,
      description: description
    })
      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
};

exports.deleteItem = async (req,res,next) =>{
  console.log(req.params);
  const item = await Expense.findByPk(req.params.prodId);
  console.log(item);
  await item.destroy();
  console.log("deleted");
  res.redirect('/');
};

exports.insertItem = async (req,res,next) =>{
  console.log(req.params);
  const item = await Expense.findByPk(req.params.prodId);
  console.log(item.title);
  
  //await item.destroy();
  res.redirect('/');
};
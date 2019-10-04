var express = require('express');
var app = express();

var models = require('./models');


app.get('/',function (req,res) {
  res.sendFile(__dirname  + '/DemoEx/test.html')
});

app.get('/image/1.jpg',function (req,res) {
  res.sendFile(__dirname  + '/DemoEx/image/1.jpg')
});

app.get('/sync',function (req,res) {
  models.sequelize.sync().then(function () {
    res.send('Database sync complete.');
  });
  });

          //crete
//Insert into tablename value(...)
app.get('/create',function (req,res) {
  models.Product
  .create({
    name: 'Product99',
    descripsion : 'Lo Lem...',
    price: Math.random()*100
  })
  .then(function (product) { 
    res.json(product);
   })
  .catch(function (error) { 
    res.json(error);
   })
  })

//insert into tablename values(..)(...)
app.get('/create1',function (req,res) {
  models.Product
  .bulkCreate([{
    name: 'Product500',
    descripsion : 'Lo Lem...',
    price: Math.random()*100
  },
{
  name: 'Product10',
    descripsion : 'Lo Lem...',
    price: Math.random()*100
}])
  .then(function (products) { 
    res.json(products);
   })
  .catch(function (error) { 
    res.json(error);
   });
  })

    //select *from table
    //where 
  app.get('/readAll',function (req,res) {
    models.Product
    .findAll()
    .then(function (products) { 
      res.json(products);
     })
    .catch(function (error) { 
      res.json(error);
     });
    });
//readOne
    app.get('/readOne',function (req,res) {
      models.Product
      .findOne({
        where : {
          price : 9.99,
        }
      })
      .then(function (products) { 
        res.json(products);
       })
      .catch(function (error) { 
        res.json(error);
       });
      });


app.listen(process.env.PORT||5000);
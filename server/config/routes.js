var bids = require('./../controllers/controller.js');
var path = require('path')



module.exports = function(app){

  
   app.post('/create', bids.createBid);
   app.get('/show', bids.showbids);
//    app.put('/update/:id', bids.startBid);
   app.get('/delete/:id', bids.delete);

   app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
  
}
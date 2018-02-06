var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');


module.exports = {

    
    
    createBid:function (req, res) {
		//console.log("create bid", req.body)
        var job = new Bid(req.body);
        job.save(function (err, aNote) {
            if(err) {
                res.json (err);
                return;
            }
            res.json(aNote);
        });
    },


    showbids: function(req, res) {
        Bid.find({}, function(err, items) {
            if(err) {
                console.log("didn't get item data");
                // res.send('did not work');
            } else {
                console.log("got item data");
               // console.log("this is the user seesion",req.session);
                res.json(items);
            }
        })
    },


    delete: function(req, res) {
        //console.log("ID", req.params.id);
        Bid.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log('something went wrong deleting a item');
                console.log(err.errors);
                // res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a item!');
                res.json(true);
            }
        })
    },
   

    // startBid: function(req, res) {
    //     console.log("item id-----"+"ObjectId('"+req.params.id+"')")
    //     console.log(req.body)
    //         Bid.update({_id:req.params.id}, req.body,function(err, item) {
    //         if(err) {
    //             console.log("didn't get item data");
    //             // res.send('can not show item');
    //         } else {
    //             console.log("got item data", item);
    //             res.json(item);
    //         }
    //     })
    // },
	
	
}

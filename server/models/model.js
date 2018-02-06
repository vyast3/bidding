// require mongoose
var mongoose = require('mongoose');
// create the schema
var BidSchema = new mongoose.Schema({
  name: {type:String},
  product1:{type:Number},
  product2:{type:Number},
  product3:{type:Number}
  
},{timestamps: true })
// register the schema as a model
var Bid = mongoose.model('Bid', BidSchema);

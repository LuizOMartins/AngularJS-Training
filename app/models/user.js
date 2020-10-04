var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: { type: String}, 
    desc: { type : String}, 
    age:  {type: Date },
    charge: {type: Number}

}); 

mongoose.model('user', userSchema); 
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: { type: String}, 
    age:  {type: Date },
    office: {type: Number}
}); 

mongoose.model('user', userSchema); 
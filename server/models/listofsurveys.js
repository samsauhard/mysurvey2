let mongoose = require('mongoose');

// create a model class
let listofsurveySchema = mongoose.Schema({
    surveyid: String,
    time: String,
    questions: Number,
    points: Number,
    email : String
},
{
    collection: "listofsurveys"
});

module.exports = mongoose.model('listofsurveys', listofsurveySchema);
let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    email: String,
    surveyid: String,
    questions: [{
        quesid: String,
        question: String,
        option1:String,
        option2:String,
        option3:String,
        option4:String
    }]
},
{
    collection: "surveyques"
});

module.exports = mongoose.model('surveys', surveySchema);
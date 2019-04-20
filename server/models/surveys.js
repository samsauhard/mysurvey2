let mongoose = require('mongoose');

// create a model class
let surveySchema = mongoose.Schema({
    email: String,
    surveyid: String,
    answers: [{
        quesid: String,
        ans: String
    }]
},
{
    collection: "survey_ans"
});

module.exports = mongoose.model('surveys_ans', surveySchema);
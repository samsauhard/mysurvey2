let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let surveyModel = require('../models/surveys');
let surveyQues = require('../models/surveyques');
let listofsurveys = require('../models/listofsurveys');


module.exports.displayAllSurveys = (req, res, next) =>{
    listofsurveys.find((err, surveyList) => {
        console.log('d');
        if(err) {
            return console.error(err);
        }
        else {
            console.log('ds');
           res.json({success: true, msg: 'Survey List Displayed Successfully', surveyList: surveyList, user: req.user});
        }
    });
}
module.exports.displaySurvey = (req, res, next) => {
    let id = req.params.id;

    surveyQues.find({surveyid: id},(err,survey) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Displayed Survey ', survey: survey, user: req.user});
        }
    })
}


module.exports.displaysurveyList = (req, res, next) =>{
    surveyModel.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey Answer List Displayed Successfully', surveyList: surveyList, user: req.user});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {
    var ans = JSON.stringify(req.body.ans);
    var quesid = JSON.parse(ans)[0].questionid;
    var ans1 = JSON.parse(ans)[0].answer;
    console.log();
   console.log(ans);
    let newsurvey = surveyModel({
        email: req.body.email,
        surveyid: req.body.surveyid,
        
        answers:{
            quesid: quesid,
            ans: ans1
        }
    });

    surveyModel.create(newsurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added Answers'});
        }
    });
}



module.exports.processDisplaySurvey = (req, res, next) => {
    let id = req.params.id;

    surveyModel.findById({_id: id},(err,survey) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Displayed Survey Answers', survey: survey, user: req.user});
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Survey Answers'});
        }
    });
}




module.exports.displaySurveyQues = (req, res, next) =>{
    surveyQues.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Survey List Displayed Successfully', surveyList: surveyList, user: req.user});
        }
    });
}

module.exports.displayAddQues = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processAddQues = (req, res, next) => {

    let newsurvey = mongoose.Schema({
        email: String,
        surveyid: String,
        questions: {
            quesid: String,
            question: String
        }
    });

    surveyModel.create(newsurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New survey'});
        }
    });
}

module.exports.displayEditQues = (req, res, next) => {
    let id = req.params.id;

    surveyQuesModel.findById(id, (err, QuesObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Contact to Edit', Ques: QuesObject});
        }
    });
}

module.exports.processEditQues = (req, res, next) => {
    let id = req.params.id;

    let updatedQues = surveyQuesModel({
        "_id": id,
        email: String,
        surveyid: String,
        questions: {
            quesid: String,
            question: String
        }
    });

    surveyQuesModel.update({_id: id}, updatedQues, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Contact', Ques: updatedQues});
        }
    })
}

module.exports.performDeleteQues = (req, res, next) => {
    let id = req.params.id;

    surveyQuesModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Contact'});
        }
    });
}
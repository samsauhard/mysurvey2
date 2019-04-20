let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

let userModel = require('../models/users');
let User = userModel.User;
let surveyController = require('../controllers/surveys');



function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
//router.get('/', passport.authenticate('jwt', {session: false}), surveyController.displaysurveyList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', passport.authenticate('jwt', {session: false}), surveyController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', passport.authenticate('jwt', {session: false}), surveyController.processAddPage);


/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), surveyController.processDisplaySurvey);

/* GET request to perform the delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), surveyController.performDelete);


router.get('/', passport.authenticate('jwt', {session: false}), surveyController.displayAllSurveys);


router.get('/:id', passport.authenticate('jwt', {session: false}), surveyController.displaySurvey);


module.exports = router;
// 'use strict';
const express = require('express');
const router = express.Router();

var contentController = require('../controllers/ContentController');

var cors = require('cors');
const app  = express();

// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
// Then pass them to cors:
app.use(cors(corsOptions));
 
app.use(require('body-parser').json());
// app.use(express.bodyParser({limit: '250mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,language');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



var bodyParser = {
  json: {limit: '500mb', extended: true},
  urlencoded: {limit: '500mb', extended: true}
};

//#region GET Service Routes
router.get('/getCityListService', contentController.getCityListService);
router.get('/getIncomeTypeListService', contentController.getIncomeTypeListService);
router.get('/getFlatTypeListService', contentController.getFlatTypeListService);
router.get('/getFlatStatusListService', contentController.getFlatStatusListService);
router.get('/getGenderListService', contentController.getGenderListService);
router.get('/getProjectStatusListService', contentController.getProjectStatusListService);
//#endregion

//#region POST Service Routes
router.post('/postCityService', contentController.postCityService);
router.post('/postIncomeTypeService', contentController.postIncomeTypeService);
router.post('/postFlatTypeService', contentController.postFlatTypeService);
router.post('/postFlatStatusService', contentController.postFlatStatusService);
router.post('/postProjectStatusService', contentController.postProjectStatusService);
router.post('/postGenderService', contentController.postGenderService);
router.post('/postLogin', contentController.postLogin);
//#endregion

//#region PUT Service Routes
router.put('/putCityService', contentController.putCityService);
router.put('/putIncomeTypeService', contentController.putIncomeTypeService);
router.put('/putFlatTypeService', contentController.putFlatTypeService);
router.put('/putFlatStatusService', contentController.putFlatStatusService);
router.put('/putProjectStatusService', contentController.putProjectStatusService);
router.put('/putGenderService', contentController.putGenderService);
//#endregion

//#region DELETE Service Routes
router.delete('/deleteCityService', contentController.deleteCityService);
router.delete('/deleteIncomeTypeService', contentController.deleteIncomeTypeService);
router.delete('/deleteFlatTypeService', contentController.deleteFlatTypeService);
router.delete('/deleteFlatStatusService', contentController.deleteFlatStatusService);
router.delete('/deleteProjectStatusService', contentController.deleteProjectStatusService);
router.delete('/deleteGenderService', contentController.deleteGenderService);
//#endregion

module.exports = router;
	











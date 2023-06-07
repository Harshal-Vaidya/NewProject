var express = require("express");
var router = express.Router();
const {getData,getCompanyByCode,getStockByName,getSevenScores,getColor} = require("../controllers/score")

// router.param("companyCode",getCompanyCode)

router.get("/getData/:companyName", getData);
router.get("/getCompany/:companyCode",getCompanyByCode);
router.get("/findStock/:companyName",getStockByName);
router.get("/getSevenScores/:companyName",getSevenScores);
router.get("/getColor/:score",getColor);





module.exports=router;
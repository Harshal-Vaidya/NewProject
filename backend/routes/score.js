var express = require("express");
var router = express.Router();
const {getData,getCompanyByCode} = require("../controllers/score")

// router.param("companyCode",getCompanyCode)

router.get("/getData", getData);
router.get("/getCompany/:companyCode",getCompanyByCode);





module.exports=router;
const mysql = require('mysql')
const pool  = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'stockscore',
    port            :3306
})

exports.getData = (req,res)=>{
    const companyName = req.params.companyName
    pool.query('SELECT name, asof_date, bse_code, nse_symbol, fy_date,q_date, sector, avg_turnover, market_cap, bse_grp, stockscrore, growth,cfo_g, fcf_g, pat_g, sales_g, worth_g, pat_g_ttm, sales_g_ttm, yoy_profit, yoy_sales FROM stocks where name = ?;',[companyName] ,(error, results) => {
        if (error) {
            throw error
        }
        console.log(JSON.stringify(results))
        res.status(200).json(results)
    })
}

exports.getCompanyByCode = (req, res) => {
    const code = req.params.companyCode
    pool.query('SELECT name,stockscrore FROM stocks WHERE name = ?', [code], (error, results) => {
        if (error) {
            return res.status(400).json({
                error: "No Company exists by company code"
              });
        }
       
        res.status(200).json(results)
})

}


exports.getStockByName = (req,res)=>{
    const companyName = req.params.companyName
  
    pool.query('SELECT name FROM stocks WHERE name LIKE ? LIMIT 5 ', [companyName.concat('%')],(error, results) => {
        if (error) {
            return res.status(400).json({
                error: "No Company exists by Stock by name"
              });
        }
       
       
        res.status(200).json(results)
})

}

exports.getSevenScores = (req, res)=>{

    const companyName = req.params.companyName
  
    pool.query('SELECT price,profitibility, scale,debt,confidence,cashflow,growth FROM `stocks` WHERE name =? ', [companyName],(error, results) => {
        if (error) {
            return res.status(400).json({
                error: "No 7 score exist exists by Stock by name"
              });
        }
       
       
        res.status(200).json(results)

})
}

exports.getColor=(req,res)=>{
    const score = req.params.score

    pool.query('SELECT code from colors where number = ? ', [score],(error, result) => {
        if (error) {
            return res.status(400).json({
                error: "no color found"
              });
        }
       
       
        res.status(200).json(result)

})
}


const Pool = require('pg').Pool
const pool = new Pool({
    user: 'harshal',
    host: 'localhost',
    database: 'eqax_db',
    password: 'test123',
    port: 5432,
})

exports.getData = (req,res)=>{
    pool.query('SELECT * FROM SCORES', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

exports.getCompanyByCode = (req, res) => {
    const code = req.params.companyCode
    pool.query('SELECT * FROM SCORES WHERE company_code = $1', [code], (error, results) => {
        if (error) {
            throw error
        }
        
        res.status(200).json(results.rows)
})

}


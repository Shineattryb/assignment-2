var mysql = require('mysql2/promise');

var express=require('express');
var cors= require('cors');
const app=express();
const port =8000;
app.use(cors("*"));
const pool = mysql.createPool({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: '3H1AA-3f6eE3FB3E2-A3bBaDDGe6DA1b',
    database: 'railway',
    port:'36742',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    
});
pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL');
        // connection.release();
    })
    .catch(error => {
        console.error('Error connecting to MySQL:', error);
    });
app.get('/', (req, res) => {
        res.send('Welcome to API!');
});






app.get('/api/cards',async(req,res)=>{
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 20;
        const offset = (page - 1) * limit;
        const [rows] = await pool.query('SELECT * FROM Card');
     
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }



});

app.listen(port,()=>{
    console.log('server is running on port');
})
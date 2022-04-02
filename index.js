const express = require('express')
const mysql = require('mysql')
const res = require('express/lib/response')
const app = express()
const router = require('./src/app/router/index')


//create a db connection 
const db = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database : 'spotifyDB'
})

//connect

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log('we move')
})

//CREATE TABLES

app.get('/createpoststable',(req,res)=>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(200),body VARCHAR(200), PRIMARY KEY (id))';
    db.query(sql,(err,result)=>{
        if (err)throw err;
        console.log('result')
        res.send('post t we move')
    })

})

// insert post1

app.get('/addpost2',(req,res)=>{

    let post = {title:'post one',body:'this is post number tow'}
    let sql= 'INSERT INTO posts SET ?'
    let query = db.query(sql,post, (err,result)=>{
        if (err)throw err
        console.log(result)
        res.send('post  added we move ')

    })
})
//get all post

app.get('/getposts',(req,res)=>{

    let sql= 'SELECT * FROM posts'
    let query = db.query(sql, (err,results)=>{
        if (err)throw err
        console.log(results)
        res.send('geting all post we move ')

    })
})
//get simgle post

app.get('/getpost/:id',(req,res)=>{

    let sql= `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result)=>{
        if (err)throw err
        console.log(result)
        res.send('geting simgle post we move ')

    })
})
//update post
app.get('/updatepost/:id',(req,res)=>{
    let newTitle = 'katunga'
    let sql= `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`
    let query = db.query(sql, (err,result)=>{
        if (err)throw err
        console.log(result)
        res.send('update simgle post we move ')

    })
})

//delete post

app.get('/deletepost/:id',(req,res)=>{
    let newTitle = 'katunga'
    let sql= `DELETE FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err,result)=>{
        if (err)throw err
        console.log(result)
        res.send('delete simgle post we move ')

    })
})
//middleware
app.use(express.json())

//route

app.get('/salut',(req,res)=>{
    res.send('katunga')
})

app.use('/api/v1/index',router)


const port = 8080

app.listen(port,console.log(`the app is listening on port ${port}`))
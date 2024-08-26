const express = require("express");
const router = express.Router();
const mysql = require('mysql');

router.get('/',(req,res)=>{

    const connection = mysql.createConnection({
        host:'주소',
        port:3306,
        user:'유저',
        password:'비밀번호',
        database:'mydb'
    })

    connection.connect((err)=>{
        if(err){
            res.render('mysql',{connect:"실패",err:"에러 발생"});
          //서버가 클라이언트한테 mysql.ejs를 렌더링해서 보낼 것이다. jSON 형태의 데이터도
            console.error(err);
            throw err;
        }else{
            res.render('mysql',{connect:"성공",err:"노에러"});
        }
    })
    connection.end();
})

module.exports=router;
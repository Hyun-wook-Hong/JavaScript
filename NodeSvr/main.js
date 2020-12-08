//'use strict';
//console.log("Hello world!");

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// '/' 경로에서 페이지에 get 요청에 의한 응답을 페이지에 나타낸다.
app.get('/', (req, res) => {    
    res.send('index.html'); 
    console.log("Welcome!"); });
app.get('/index.html', (req, res) => {    
    res.send('index.html'); 
    console.log("Client has reached index page.");
});
app.get('/myvision.html', (req, res) => {    
    res.send('myvision.html'); 
    console.log("Client has reached my vision contents page. ")}
    );

// 이런짓도 할수있다. 이게 바로 위의 라우팅 개념.
/*
app.get('/hello.node', (req, res) => {
    res.json({
        
        success: true,
        hello: "World!",

    });
});*/

app.listen(port, () => {
    console.log(`Server is listening at localhost:${port}`);

});
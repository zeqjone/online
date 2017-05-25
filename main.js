/*
author:zeq
time:2017.5.25
version:v1.0.0
descrip:主程序入口
*/
const express = require('express');
const app = new express();
const path = require('path');
const log = require('./lib/log').log;

app.use('/static',express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, '/view')));

app.listen(8888,function(){
	console.log('app start.');
	log.info('app start.');
});


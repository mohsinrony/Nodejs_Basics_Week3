'use strict';

const http = require('http');
const path = require('path');

const {port,host} = require('./config.json');

const {sendFile} = require('./functionLibrary');
const {search} = require('./dataleyer');

const homePath = path.join(__dirname, 'home.html');

const server = http.createServer((req,res)=>{
    const {
        pathname,
        searchParams
    } =new URL(`http://${req.headers.host}${req.url}`);
    const route = decodeURIComponent(pathname);
    if(route==='/'){
        sendFile(res,homePath);
    }
    else if(route.startsWith('/styles/')) {
        sendFile(res,path.join(__dirname, route), 'text/css')
    }
    else
    {res.end();}
})

server.listen(port,host, 
    ()=> console.log(`${host}:${port} serving....`));
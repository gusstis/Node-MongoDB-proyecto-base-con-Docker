//https://www.youtube.com/watch?v=w1v6DspnUBQ

import express from 'express';
const app = express();

import './database.js';

app.listen(3000);
console.log('Server on port: ' + 3000);
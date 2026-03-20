import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { VandorRoute } from './routes/VandorRoute.ts'
import { AdminRoute } from './routes/AdminRoute.ts'
import { MONGO_URI } from './config/index.ts';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

mongoose.connect(MONGO_URI).then(result => {
    //console.log(result);
    console.log('DB Connected!')
}).catch(err => console.log('error' + err)) 

app.listen(8000, () => {
    console.clear();
    console.log('Server running at port 8000');
})
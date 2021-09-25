import express from 'express';
import router from './src/flights/flights.router.js';

const app = express();

app.use(express.json());
app.use('/flights', router);


app.listen(4001, () => {
    console.log('He levantado un servidor Yupiii');
})
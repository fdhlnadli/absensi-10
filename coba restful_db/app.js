import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js';
import cors from 'cors';

const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/restful_db', {
   useNewUrlParser: true, 
   useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen(port, () => { 
   console.log(`Server listening at http://localhost:${port}..`) 
});
import express from 'express';
import mongoose from 'mongoose';
// import route from './routes/app.js';
import cors from 'cors';

const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/restful_db', {
   useNewUrlParser: true, 
   useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected!!'));

app.use(cors());
app.use(express.json());
// app.use('/product', route);

app.listen(port, () => console.log(`ABSENSI SMAN 10 BEKASI APP listening at ${port}`));
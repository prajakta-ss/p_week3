import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();
/* database config */

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb
try {
mongoose.connect(URI), 
console.log('MongoDB connected');
    
} catch (error) {
    console.log('MongoDB connection failed');
}


  // Defining Routes
  app.use(cors());
  app.use(express.json());
  app.use('/api/book',bookRoute);
  /* app.use('/book',bookRoute); */
  app.use('/user',userRoute);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
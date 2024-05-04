import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/AuthRoutes.js'
import cors from 'cors';
import connectDB from './utils/connect.js';

const app= express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 1000;
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.use("/api/v1/auth",authRoutes)

connectDB()

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

export default app;
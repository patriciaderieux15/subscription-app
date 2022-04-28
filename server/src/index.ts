import express from 'express';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

dotenv.config();

app.use(express.json());
app.use('/auth', authRoutes);


mongoose.connect(
    process.env.MONGO_URI as string
)
.then(() => {
    console.log("Connected! to mongoDB");

    app.listen(8080, () => {
        const app = express();



app.use(express.json());
app.use('/auth', authRoutes);

        console.log(`Now listening to port 8080`)
    })
})
.catch((error) => {
    console.log({error})
    throw new Error(error)
})


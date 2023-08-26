// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import './db'; // Initialize MongoDB connection
import authRoutes from './routes/auth';

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

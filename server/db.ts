// db.ts
import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import authRoutes from './Routes/AuthRouter.js';
// import './config/db.js';  // <-- Add this import to initialize the DB connection

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// app.use(cors());

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', authRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './Routes/AuthRouter.js';
import './config/db.js';  // DB connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
  'https://we-exist-project.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

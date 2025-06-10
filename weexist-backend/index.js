import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './Routes/AuthRouter.js';
import './config/db.js';
import volunteerRoutes from './Routes/volunteerRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Allow multiple origins: deployed + localhost
const allowedOrigins = [
  'http://localhost:5173',
  'https://we-exist-project.vercel.app',      // your current frontend URL
  'https://weexist-frontend.vercel.app'       // optional: if still needed
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked: ${origin} not allowed`));
  },
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server running');
});

app.use('/api/volunteer', volunteerRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import { authenticateToken } from './middleware/auth.js';
import { pool } from './config/database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/sports', authenticateToken);
app.use('/api/bookings', authenticateToken);

// Sports endpoints
app.get('/api/sports', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM sports');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Bookings endpoints
app.post('/api/bookings', async (req, res) => {
  const { sportId, date, time } = req.body;
  const userId = req.user.userId;
  
  try {
    const [result] = await pool.query(
      'INSERT INTO bookings (user_id, sport_id, date, time) VALUES (?, ?, ?, ?)',
      [userId, sportId, date, time]
    );
    res.json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
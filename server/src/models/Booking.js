import { pool } from '../config/database.js';

export class Booking {
  static async create(booking) {
    const { user_id, sport_id, date, time } = booking;
    const [result] = await pool.query(
      'INSERT INTO bookings (user_id, sport_id, date, time) VALUES (?, ?, ?, ?)',
      [user_id, sport_id, date, time]
    );
    return result.insertId;
  }

  static async getUserBookings(userId) {
    const [rows] = await pool.query(
      `SELECT b.*, s.name as sport_name, s.image_url 
       FROM bookings b 
       JOIN sports s ON b.sport_id = s.id 
       WHERE b.user_id = ?`,
      [userId]
    );
    return rows;
  }

  static async updateStatus(id, status) {
    await pool.query(
      'UPDATE bookings SET status = ? WHERE id = ?',
      [status, id]
    );
  }
}
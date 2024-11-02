import { pool } from '../config/database.js';

export class Sport {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM sports');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM sports WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(sport) {
    const { name, description, price_per_hour, image_url } = sport;
    const [result] = await pool.query(
      'INSERT INTO sports (name, description, price_per_hour, image_url) VALUES (?, ?, ?, ?)',
      [name, description, price_per_hour, image_url]
    );
    return result.insertId;
  }
}
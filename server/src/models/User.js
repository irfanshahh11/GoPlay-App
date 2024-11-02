import { pool } from '../config/database.js';
import bcrypt from 'bcryptjs';

export class User {
  static async create(user) {
    const { email, password, name } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [result] = await pool.query(
      'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name]
    );
    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  static async validatePassword(user, password) {
    return bcrypt.compare(password, user.password_hash);
  }
}
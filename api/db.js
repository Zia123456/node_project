import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_Blog-user',
  password: 'Wed3WKW2t*UFZWt',
  database: 'freedb_BlogApp',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

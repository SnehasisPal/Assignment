// scripts/insertSampleUsers.js
const pool = require('../config/dbConfig');

async function insertSampleUsers() {
  for (let i = 1; i <= 10000; i++) {
    const user = {
      name: `users ${i}`,
      group_name: i % 2 === 0 ? 'Admin' : 'User'
    };

    await pool.query('INSERT INTO users SET ?', user);
  }

  console.log('Sample users inserted successfully');
  pool.end();
}

insertSampleUsers();

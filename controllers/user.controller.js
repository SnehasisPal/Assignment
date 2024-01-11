const pool = require('../config/dbConfig');

const getUsers = async (req, res) => {
  const { page = 1, search, group } = req.query;
  const limit = 50;
  const offset = (page - 1) * limit;

  let query = 'SELECT * FROM users';

  // Add search condition
  if (search) {
    query += ` WHERE name LIKE '%${search}%'`;
  }

  // Add group filter
  if (group) {
    query += ` ${search ? 'AND' : 'WHERE'} group_name = '${group}'`;
  }

  // Add pagination
  query += ` LIMIT ${limit} OFFSET ${offset}`;

  try {
    const [users, fields] = await pool.query(query);
    res.json(users);
  } catch (error) {
    console.error('Error retrieving user list:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getUsers,
};
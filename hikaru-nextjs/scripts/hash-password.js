#!/usr/bin/env node

/**
 * Password Hasher for Admin Authentication
 * 
 * Usage:
 *   node scripts/hash-password.js your_password_here
 * 
 * This script generates a bcrypt hash of the provided password
 * that can be used in the ADMIN_PASSWORD environment variable.
 */

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('❌ Error: Please provide a password as an argument');
  console.error('Usage: node scripts/hash-password.js your_password_here');
  process.exit(1);
}

const saltRounds = 10;
const hash = bcrypt.hashSync(password, saltRounds);

console.log('\n✅ Password hashed successfully!\n');
console.log('Add this to your .env.local file:\n');
console.log(`ADMIN_PASSWORD=${hash}\n`);
console.log('⚠️  Keep this secret and never commit it to version control!\n');

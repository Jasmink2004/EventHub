const bcrypt = require('bcrypt');

const password = 'myPassword123';
const saltRounds = 10;

async function testBcrypt() {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match:', isMatch);
  } catch (error) {
    console.error('Error with bcrypt:', error);
  }
}

testBcrypt();

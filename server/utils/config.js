require('dotenv').config();

const PORT = process.env.PORT;
let mongoUrl = process.env.MONGOURI;
const envir = process.env.NODE_ENV || 'production';

if (process.env.NODE_ENV === 'test') {
  mongoUrl = process.env.TEST_MONGOURI;
} else if (process.env.NODE_ENV === 'development') {
  mongoUrl = process.env.DEV_MONGOURI;
}

module.exports = {
  mongoUrl,
  PORT,
  envir,
};

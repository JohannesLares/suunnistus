const app = require('./app');
const conf = require('./utils/config');

app.listen(conf.PORT, () => {
  console.log('-----------------------------');
  console.log(`Server running on port ${conf.PORT}`);
  console.log('-----------------------------');
});

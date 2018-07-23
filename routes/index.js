const tasks = require('./task');

module.exports = (app) => {
  app.use('/tasks', tasks)
  // etc..
}
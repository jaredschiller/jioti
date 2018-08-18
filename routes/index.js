const project = require('./project');

module.exports = (app) => {
  app.use('/projects', project)
  // etc..
}
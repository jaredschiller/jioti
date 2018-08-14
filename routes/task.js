const Router = require('express-promise-router');

const db = require('../db');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

router.get('/', async (req, res) => {
  // const { id } = req.params;
    try { 
      const response =  await db.query('select  ps.name, p.name from tProject p join  tProjectStatus ps  on (p.ProjectStatusID = ps.ID);');
      console.log(response);
      res.send(response.rows);
    }
    catch(err) {
      console.error("My ERROR", err);
    }
}); 
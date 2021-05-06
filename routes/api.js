const express = require('express');
const router = express.Router();

const { getSearchResults } = require('../api/api');

router.get('/', (req, res) => {
  res.json({ response: 'The api is working' });
});

router.post('/', async (req, res) => {
  if (req.body.query.length < 1) {
    return null;
  } else {
    let data = await getSearchResults(req.body.query);
    res.json({ result: data });
  }
});

module.exports = router;

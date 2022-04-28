/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const tickRouter = require('express').Router();

// Create new tick
tickRouter.post('/new', async (req, res, next) => {
  res.status(501);
});

// List all ticks
tickRouter.get('/all', async (req, res, next) => {
  res.status(501);
});

// Get one tick
tickRouter.get('/:tickId', async (req, res, next) => {
  res.status(501);
});

// Delete one tick
tickRouter.delete('/:tickId', async (req, res, next) => {
  res.status(501);
});

// Update tick
tickRouter.put('/:tickId', async (req, res, next) => {
  res.status(501);
});

module.exports = [tickRouter];

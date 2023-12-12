import express, { Router } from 'express';
import cors from 'cors';
import { getEvents, getEventId } from '../controllers/eventsViaSupabase.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json("it's working :3 ");
});

router.options('/events', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/events', cors(), getEvents);
router.get('/events/:number', cors(), getEventId);

export default router;

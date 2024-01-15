import express, { Router } from 'express';
import cors from 'cors';
import { getEvents, getEventId } from '../controllers/eventsViaSupabase.js';

const router = express.Router();

router.options('/', (req, res, next) => {
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

router.get('/', cors(), getEvents);
router.get('/:id', cors(), getEventId);

export default router;

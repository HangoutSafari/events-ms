import express, { Router } from 'express';
import cors from 'cors';
import { getAllEvents, getChosenEvent, getAllCategories, getParticipants } from '../controllers/eventsViaSupabase.js';

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

router.get('/', cors(), getAllEvents);
router.get('/categories', cors(), getAllCategories);
router.get('/:id', cors(), getChosenEvent);
router.get('/:id/participants', cors(), getParticipants)
export default router;

import express, { Router } from 'express';
import { getAuthAllEvents, getAuthChosenEvents, insertAuthEvents, updateAuthEvents, deleteAuthEvents, subscribeToAnEvent, attendToAnEvent } from '../controllers/eventsViaSupabase.js';


const router = express.Router();

router.options('/', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"http://localhost:5173",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      Data: Date.now(),
      'Content-length': 0,
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});


router.options('/:id', (req, res, next) => {
  try {
    res.header({
      allow: 'OPTIONS, DELETE, PUT',
      'Content-type': 'application/json',
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"http://localhost:5173",
      "Access-Control-Allow-Methods": 'OPTIONS, DELETE, PUT',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      Data: Date.now(),
      'Content-length': 0,
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/', getAuthAllEvents);
router.get('/:id', getAuthChosenEvents);
router.post('/', insertAuthEvents);
router.post('/subscribe', subscribeToAnEvent);
router.put('/attend/:id', attendToAnEvent)
router.put('/:id', updateAuthEvents);
router.delete('/:id', deleteAuthEvents);

export default router;

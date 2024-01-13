import express from 'express';
import { CricketScoreboardController } from './cricketScoreboard.controller';

const router = express.Router();

router.get(
  '/currentMatches',
  CricketScoreboardController.getAllCurrentMatchesData
);
router.get(
  '/cricketSeries',
  CricketScoreboardController.getAllCricketSeriesData
);

export const CricketScoreboardRoutes = router;

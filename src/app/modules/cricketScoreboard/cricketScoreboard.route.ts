import express from 'express';
import { CricketScoreboardController } from './cricketScoreboard.controller';

const router = express.Router();

router.get(
  '/currentMatches',
  CricketScoreboardController.getAllCurrentMatchesData
);

export const CricketScoreboardRoutes = router;

import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CricketScoreboardRoutes } from '../modules/cricketScoreboard/cricketScoreboard.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cricketScoreboard',
    route: CricketScoreboardRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

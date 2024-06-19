import { Router } from 'express';
import { searchTutorial } from '../controllers/tutorialSearch.controller';
import { asyncHandler } from '../utils/asynchandler';

const tutorialSearchRouter = Router();

tutorialSearchRouter.get('/search', asyncHandler(searchTutorial));

export default tutorialSearchRouter;
import { Router } from 'express';
import { searchCategory, searchForMatchingTutorials } from '../controllers/categorySearch.controller';
import { asyncHandler } from '../utils/asynchandler';

const categorySearchRouter = Router();

categorySearchRouter.get('/search', asyncHandler(searchCategory));
categorySearchRouter.get('/full', asyncHandler(searchForMatchingTutorials));

export default categorySearchRouter;
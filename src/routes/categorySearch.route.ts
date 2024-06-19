import { Router } from 'express';
import { searchCategory } from '../controllers/categorySearch.controller';
import { asyncHandler } from '../utils/asynchandler';

const categorySearchRouter = Router();

categorySearchRouter.get('/search', asyncHandler(searchCategory));

export default categorySearchRouter;
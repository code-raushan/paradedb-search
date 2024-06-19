import { Router } from 'express';
import { searchSubtopic } from '../controllers/subtopicSearch.controller';
import { asyncHandler } from '../utils/asynchandler';

const searchServiceRouter = Router();

searchServiceRouter.get('/search', asyncHandler(searchSubtopic));


export default searchServiceRouter;
import { Router } from 'express';
import { searchTopic } from '../controllers/topicSearch.controller';
import { asyncHandler } from '../utils/asynchandler';

const topicSearchRouter = Router();

topicSearchRouter.get('/search', asyncHandler(searchTopic));

export default topicSearchRouter;
import { Router } from 'express';
import { health, helloWorld } from '../controllers/health.controller';
import { asyncHandler } from '../utils/asynchandler';
import categorySearchRouter from './categorySearch.route';
import topicSearchRouter from './topicSearch.route';
import tutorialSearchRouter from './tutorialSearch.route';

const v1Router = Router();

v1Router.get('/', asyncHandler(helloWorld));
v1Router.get('/health', asyncHandler(health));
v1Router.use('/category', categorySearchRouter);
v1Router.use('/tutorial', tutorialSearchRouter);
v1Router.use('/topic', topicSearchRouter);
v1Router.use('/subtopic', topicSearchRouter);


export default v1Router;
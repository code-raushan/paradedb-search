import { Router } from 'express';
import { asyncHandler } from '../utils/asynchandler';
import { health, helloWorld } from '../controllers/health.controller';

const v1Router = Router();

v1Router.get('/', asyncHandler(helloWorld));
v1Router.get('/health', asyncHandler(health));

export default v1Router;
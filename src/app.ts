import express, { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import xss from 'xss-clean';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rootRouter from './routes/index.route';
import { getLocalIP } from './utils/system.util';
import logger from './utils/logger';
import { asyncHandler } from './utils/asynchandler';
import { notFound } from './controllers/health.controller';
import { globalHandler } from './middlewares/error-handler.middleware';

const app = express();
app.set('trust proxy', true);
app.set('view engine', 'ejs');
app.set('views', 'src/views');


app.use(express.json());

app.use(xss());
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  frameguard: false,
}));
app.use(mongoSanitize());

app.use(rootRouter);

app.use('*', asyncHandler(notFound));

app.use((
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  data: any, req: Request, res: Response, next: NextFunction
) => {
  globalHandler(data, req, res, next);
});

logger.info(`Local IP - ${getLocalIP()}`);

export default app;

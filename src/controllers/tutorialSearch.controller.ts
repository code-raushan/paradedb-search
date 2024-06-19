import { NextFunction, Request, Response } from 'express';
import tutorialSeachService from '../services/tutorialSeach.service';

export const searchTutorial = async (req: Request, res: Response, next: NextFunction) => {
    const q = req.query.q as string;

    const response = await tutorialSeachService.searchTutorialForQuery(q);

    next(response);
};
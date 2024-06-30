import { NextFunction, Request, Response } from 'express';
import categorySearchService from '../services/categorySearch.service';

export const searchCategory = async (req: Request, res: Response, next: NextFunction) => {
    const q = req.query.q as string;
    const response = (await categorySearchService.searchForQuery(q));

    next(response);
};

export const searchForMatchingTutorials = async (req: Request, res: Response, next: NextFunction) => {
    const q = req.query.q as string;
    const response = (await categorySearchService.searchForMatchingTutorials(q));

    next(response);
};
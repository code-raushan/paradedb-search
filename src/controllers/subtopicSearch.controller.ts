import { NextFunction, Request, Response } from 'express';
import subtopicSearchService from '../services/subtopicSearch.service';

export const searchSubtopic = async (req: Request, res: Response, next: NextFunction) => {
    const q = req.query.q as string;

    const response = await subtopicSearchService.searchSubtopicForQuery(q);

    next(response);
};
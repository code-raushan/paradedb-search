import { NextFunction, Request, Response } from 'express';
import topicSearchService from '../services/topicSearch.service';

export const searchTopic = async (req: Request, res: Response, next: NextFunction) => {
    const q = req.query.q as string;

    const response = await topicSearchService.searchTopicForQuery(q);

    next(response);
};
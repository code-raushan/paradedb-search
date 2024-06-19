import { sql } from 'kysely';
import { db } from '../db';
import { BadRequestError } from '../errors/bad-request.error';

class TopicSearch {
    private _db = db;

    async searchTopicForQuery(q: string) {
        if (q.trim() === '') throw new BadRequestError('search query cannot be empty');

        const query = sql`SELECT * FROM topic_search_idx.search('topicname:${sql.raw(q)}^3 OR topicdescription:${sql.raw(q)}^2')`;

        return (await query.execute(this._db)).rows;
    }
}

export default new TopicSearch();
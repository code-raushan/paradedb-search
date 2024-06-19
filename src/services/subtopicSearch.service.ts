import { sql } from 'kysely';
import { db } from '../db';
import { BadRequestError } from '../errors/bad-request.error';

class SubtopicSearch {
    private _db = db;

    async searchSubtopicForQuery(q: string) {
        if (q.trim() === '') throw new BadRequestError('search query cannot be empty');

        const query = sql`SELECT * FROM subtopic_search_idx.search('subtopicname:${sql.raw(q)}^3 OR subtopicdescription:${sql.raw(q)}^2')`;

        return (await query.execute(this._db)).rows;
    }
}

export default new SubtopicSearch();
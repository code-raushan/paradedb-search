import { sql } from 'kysely';
import { db } from '../db';
import { BadRequestError } from '../errors/bad-request.error';

class TutorialSearch {
    private _db = db;

    async searchTutorialForQuery(q: string) {
        if (q.trim() === '') throw new BadRequestError('search query cannot be empty');

        const query = sql`SELECT * FROM tutorial_search_idx.search('tutorialname:${sql.raw(q)} OR tutorialdescription:${sql.raw(q)}')`;

        return (await query.execute(this._db)).rows;
    }
}

export default new TutorialSearch();
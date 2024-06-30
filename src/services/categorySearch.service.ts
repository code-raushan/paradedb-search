import { sql } from 'kysely';
import { db } from '../db';
import { BadRequestError } from '../errors/bad-request.error';
class CategorySearch {
    private _db = db;

    async searchForQuery(q: string) {

        if (q.trim() === '') throw new BadRequestError('search query cannot be empty');

        const query = sql`SELECT * FROM category_search_idx.search('categoryname:${sql.raw(q)}')`;

        return (await query.execute(this._db)).rows;
    }

    async searchForMatchingTutorials(q: string) {
        if (q.trim() === '') throw new BadRequestError('search query cannot be empty');

        const query = sql`SELECT id, categoryname, tutorials FROM category_mv_search_idx.search('categoryname:${sql.raw(q)} OR tutorials.tutorialname:${sql.raw(q)}')`;
        // const query = sql`SELECT * FROM categorywithtutorials LIMIT 2`;

        return (await query.execute(this._db)).rows;
    }
}

export default new CategorySearch();
import { sql } from 'kysely';
import { db } from '../db';

class TutorialSearch {
    private _db = db;

    async searchTutorialForQuery(q: string) {
        const query = sql`SELECT * FROM tutorial_search_idx.search('tutorialname=${sql.raw(q)} OR tutorialdescription=${sql.raw(q)}')`;

        return (await query.execute(this._db)).rows;
    }
}

export default new TutorialSearch();
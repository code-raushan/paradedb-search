import { readFileSync } from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { pool } from './db';
import logger from './utils/logger';


interface Args {
    file: string;
    [x: string]: unknown;
}
const args = yargs(hideBin(process.argv))
    .option('file', {
        alias: 'f',
        type: 'string',
        description: 'Path to the file to be processed',
        demandOption: true,
    })
    .help()
    .alias('help', 'h')
    .argv as Args;


const executeSQLFile = async (filePath: string) => {

    const client = await pool.connect();
    try {
        const sql = readFileSync(filePath, 'utf-8');

        await client.query(sql);
        logger.info(`Successfully executed ${filePath}`);
    } catch (error) {
        logger.error(`error`);
    } finally {
        client.release();
    }
};

const main = async () => {
    const filePath = args.file;
    await executeSQLFile(filePath);
};

main().catch(logger.error);
import './setup-aliases'; // This should be the first import
import express, { Express } from 'express';
import { PORT } from "./environment";
import { dataSource } from "./db/data-source";

const app: Express = express();

function main() {
    initializeDb().then(() => {
        app.listen(PORT, async () => {
            console.log('server is running on port:', PORT);
        });
    });
}

async function initializeDb() {
    await dataSource.initialize();
    console.log('database initialized.');
}

main();
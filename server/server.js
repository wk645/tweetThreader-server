import Express from 'express';
import * as os from 'os';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const app = new Express();

export default class ExpressServer {
    constructor() {
        app.set('appPath', `${global}client`);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
        app.disable('x-powered-by');
    }

    router(routes) {
        routes(app);
        return this;
    }

    listen(port = process.env.PORT) {
        return new Promise(resolve => {
            app.listen(port, () => {
                console.log(`Up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}`);
                resolve(app);

                ['SIGINT', 'SIGTERM'].forEach(signal => process.on(signal, () => {
                    process.exit(0);
                }));
            }).on('error', error => {
                console.error('error in server.js: ', error);
                process.exit(0);
            });
        });
    }
}

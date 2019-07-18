import homeRouter from './api/controllers/home/router';

export default function routes(app) {
    const baseURL = '/api/tweetThreader/v1';

    app.use(`${baseURL}/home`, homeRouter);
}

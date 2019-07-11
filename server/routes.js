import airRouter from './api/controllers/air/router';

export default function routes(app) {
    // app.use('/', homeRouter);
    app.use('/api/airqual/v1/air', airRouter);
}

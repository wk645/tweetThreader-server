import config from 'config';
import Server from './server';
import routes from './routes';

console.log('test', config);

export default new Server()
    .router(routes)
    .listen(8081);

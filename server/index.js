import config from 'config';
import Server from './server';
import routes from './routes';

export default new Server()
    .router(routes)
    .listen(config.get('server.port'));

import config from 'config';
import Twitter from 'twitter';

class TwitterManager {
    constructor() {
        this._twitterClient = new Twitter({
            consumer_key: config.get('twitter.consumerApiKey'),
            consumer_secret: config.get('twitter.consumerApiSecret'),
            access_token_key: config.get('twitter.accessTokenKey'),
            access_token_secret: config.get('twitter.accessTokenSecret')
        });
    }

    async getUser(screenName) {
        const userInfo = await this._twitterClient.get('users/show', screenName)
            .then(user => user)
            .catch(error => error);

        return userInfo;
    }

    async getHomeTimeline(screenName) {
        const homeTimeline = await this._twitterClient.get('statuses/home_timeline', screenName)
            .then(tweets => tweets)
            .catch(error => error);

        return homeTimeline;
    }
}

export default new TwitterManager();

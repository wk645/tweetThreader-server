import TwitterManager from '../../services/twitterManager';

export class Controller {
    async getHomeTimeline(req, res) {
        const { screenName } = req.body;

        if (!screenName) {
            return res.status(400).json('Invalid request. Missing screen name.');
        }

        const timeline = await TwitterManager.getHomeTimeline(screenName);

        if (!timeline) {
            return res.status(400).json(`Invalid request. Unable to retrieve user timeline for user ${screenName}.`);
        }

        const timelineArray = [];
        let customTweet = {};

        for (const tweet of timeline) {
            const {
                created_at,
                text,
                user: { name, screen_name },
                in_reply_to_status_id,
                in_reply_to_status_id_str,
                in_reply_to_user_id,
                in_reply_to_screen_name
            } = tweet;

            customTweet = Object.assign(customTweet, {
                name,
                screen_name,
                created_at,
                text,
                in_reply_to_status_id,
                in_reply_to_status_id_str,
                in_reply_to_user_id,
                in_reply_to_screen_name
            });

            timelineArray.push(customTweet);
            customTweet = {};
        }

        return res.status(200).json(timelineArray);
    }
}

export default new Controller();

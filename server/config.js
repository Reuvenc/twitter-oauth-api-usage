/**
 * Created by chacha on 10/06/2017.
 */
const path = require('path');
const twitterCredentials = require('../twitter-credentials.json');

if (!twitterCredentials.consumerKey || !twitterCredentials.consumerSecret) {
	throw new Error('Please provide valid twitter credentials in twitter-credentials.json: consumerKey, consumerSecret');
}

const staticContentLocation = path.join(__dirname, '../build');

/**
 *
 * @typedef {{
 * 		staticContentLocation: string,
 * 		port: string,
 * 		templatePath: string,
 * 		callbackPath: string,
 * 		twitterConsumerKey: string,
 * 		twitterConsumerSecret: string
 * 	}} AppConfig
 */
module.exports = {
	staticContentLocation,
	callbackPath: 'auth/callback',
	port: process.env.PORT || '3002',
	templatePath: path.join(staticContentLocation, 'index.html'),
	twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY || twitterCredentials.consumerKey,
	twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET || twitterCredentials.consumerSecret,
};

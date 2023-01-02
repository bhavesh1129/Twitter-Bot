import  { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
    apiKey: process.env.API_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret:  process.env.ACCESS_SECRET
});

const rwClient = client.readWrite;

const tweet = async () => {
    try {
        await rwClient.v1.tweet("Hello World!");
    } catch (error) {
        console.log(error);
    }
}
tweet();
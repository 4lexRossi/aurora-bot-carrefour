const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');

const token = 'TOKEN';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {    
    
    const chatId = msg.chat.id;

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
   
    let textResponse = dfResponse.text;
   
    bot.sendMessage(chatId, textResponse);
});
const TeleBot = require('telebot')
const bot = new TeleBot('608315405:AAE4_7-TcgonXz-tcG_wPPPjgVdnJQBuQCU')

bot.on('/hey', (msg) => {
    // return msg.reply.text(msg.text)
    return msg.reply.text('Ali')
})

bot.start()
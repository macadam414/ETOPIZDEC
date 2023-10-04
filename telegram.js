import { Telegraf , Markup} from 'telegraf'
import { message } from 'telegraf/filters'
import { exec } from 'child_process'
console.log(exec)
const bot = new Telegraf('6335444085:AAFA8ud23yVCsRbQKtsKNfzLNJsd3Yhw1tQ')

bot.hears(/\d+/g, async (ctx) => {
  
     const userGuess = parseInt(ctx.match[0])
      if  (Math.floor(Math.random() * 3) === userGuess) {
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Красава. Пососешь?`)
      }
      else {
        await ctx.telegram.sendMessage(ctx.message.chat.id, `Ты уебище!!!`)
    }
   });

bot.on(message('text'), async (ctx) => {
  // Explicit usage
  switch(ctx.message.text) {
    case "ты пидор": 
      await ctx.telegram.sendMessage(ctx.message.chat.id, `соси хуй быдло`)
      break 
    case "игра":
      await ctx.reply('Выбери игру.', Markup.keyboard(['Угадай число']))
      break
    case "Угадай число":
  

      await ctx.reply('Я загадал число от 1 до 100. Попробуй угадать.')
         
   }
})

  // Using context shortcut
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

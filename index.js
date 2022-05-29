const Discord = require("discord.js")
const axios = require('axios')
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content.slice(0,2) === "0x") {
    axios.get(`https://murmuring-bastion-66789.herokuapp.com/getDecodedTransaction?txHash=${msg.content}`)
    .then(response => {
         const { message, methodResponse} = response.data
         msg.reply(`${message} via ${methodResponse.method}\n`)
      })
      .catch(error => console.log(
            'Error to fetch data\n'))
}
})
const mySecret = process.env['TOKEN']
client.login(mySecret)


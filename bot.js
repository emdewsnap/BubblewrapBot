const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const PREFIX = 'bw!'
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("Type bw!help");
 });

client.on('message', msg => {
    if (msg.content.startsWith(PREFIX)) {
        let commandTxt = msg.content.substring(3);
        if(commandTxt == 'help'){
            msg.channel.send("Type bw![keyword],[width],[height] to generate a bubblewrap field!")
        }
        else{
            let params = commandTxt.split(',');
            if(isNaN(params[1])||isNaN(params[2])||params.length!=3){
                //no. you screwed up
            }
            else{
                let word = params[0];
                let w = Number(params[1]);
                let h = Number(params[2]);
                let result = "";
                if((((word.length + 4) * w) * (h)) > 4000){
                    result = "Result too long; over 4000 characters";
                }
                else{
                    for(let x = 0; x < h; x++){
                        for(let y = 0; y < w; y++){
                            result+=('||'+word+'||');
                        }
                        result+='\n';
                    }
                }
                msg.channel.send(result);
            }
        }
    }
});

client.login(process.env.TOKEN);
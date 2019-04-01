const Discord = require("discord.js");
 const bot = new Discord.Client({disableEveryone: true});
 bot.commands = new Discord.Collection();
 const token = process.env.token;

const size = 12;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;

function changeColor() {
  for (let index = 0; index < 1; ++index) {
    bot.guilds.get("473833367029153794").roles.find('name', "Raimbow").setColor(rainbow[place])
		.catch(console.error);
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on("ready", async () => {

    setInterval(changeColor, 60);
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
 
    bot.user.setActivity('LFDF | Raimbow Bot', {type: "LISTENING"});
  });

bot.login(token);

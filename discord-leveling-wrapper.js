//var index = require("./index.js");
//var queuing = require("./queue.js");
const dl = require('discord-leveling');

var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
case 'addLevel':
  dl.AddLevel(myArgs[1], parseInt(myArgs[2], 10))
  break;
case 'addXP':
  dl.AddXp(myArgs[1], parseInt(myArgs[2], 10))
  break;
case 'setXp':
  dl.SetXp(myArgs[1], parseInt(myArgs[2], 10))
  break;
case 'setLevel':
  dl.SetLevel(myArgs[1], parseInt(myArgs[2], 10))
  break;
case 'Leaderboard':
  dl.Leaderboard({limit: parseInt(myArgs[1], 10), search: myArgs[2]})
  break;
case "Fetch":
  dl.Fetch(myArgs[1])
  break;
case "delete":
  dl.Delete(myArgs[1])
default:
    console.log('Hmm... seems that I do not know how to do', myArgs[1] + ".");
}

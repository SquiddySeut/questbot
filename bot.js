const Discord = require('discord.js');
var x; // new
var stage0 = "You wake up in a lush forest. It's in the middle of the night and you notice a light somewhere in the distance to your right.";
var quest0 = "Do you go (left) to go deeper into the dark forest or (right) towards the light?";
var stage0L="You head deeper into the woods. You can't see anything, and suddenly, a spear protrudes from your chest.";
var gameOver="You fall down, writhing in pain. You have died";
var stage01="You find an abandoned warehouse, with a bright yellow light beaming from within";
var quest01="Do you (go inside), or (wait) outside?";
var stage01L="You walk inside, quietly. You hear some footsteps behind you and you feel a blunt blow to the back of your head.";
var stage02="You wait outside and hear some sort of screaming from the inside. Shortly after, you see a man in a cloak run out.";
var quest02="Do you (chase) after the man in the cloak, or (sneak) into the warehouse to peep on what was going on?";
var stage02L="You chase after him, but you soon lose him in the dense forest. You have no idea where you are. Suddenly, a bright light appears behind you and you are engulfed in flames";
var stage03="You sneak in quietly. You see a woman being tied to a chair. You untie her. She tells you to follow her to her village and that it has been corrupted by evil mages";
var quest03="Do you (follow her) or (refuse) her request?";
var stage04="You follow her into the village. You see multiple people begging. They tell you to kill the mage. His head disappears.";
var stage03R="You refuse her and leave the warehouse. In the forest, a blue gleaming light appears. You follow it. Suddenly, blood starts gushing out of your mouth.";
var quest04="You challenge the mage. Before he accepts, the woman you rescued gave you a one-time-use charm. What does it do?";
var pTurn;
var enemyH;
var defX;
var dmgG;
var ans;
var damageTook;

//battles
var battle=" challenges you!";
var playerTurn;
//weapons
var fist=5;
var stick=7;
var sword=10;
var spellbook=20;
var weapon;
var dmg;
//armor
var glove=1;
var chainmail=5;

const client = new Discord.Client();

var squid;
var hugh;
var mafu;
var kono;
var save5;
var save;
var load;
var delet;
var damage;
var health;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var turn;


client.on('ready', () => {


   console.log('I am ready!');


});



   

client.on('message', message => {

   if (message.content === 'psst') {


     message.reply('*Hello... Would you like access to a wonderful place?*');
     message.reply('*If so, you have come to the right place...*');
     message.reply('React to this message if you want access to a totally not shady, but lewd area back behind her house...')
   }

  
   
   }           
   });
